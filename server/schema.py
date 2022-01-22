import graphene
from graphene_django import DjangoObjectType

from users.models import Users

class UsersType(DjangoObjectType):
    class Meta:
        model = Users
        fields = ("uid", "firstName", "lastName", "email", "password")

class UsersInput(graphene.InputObjectType):
    firstName = graphene.String()
    lastName = graphene.String()
    email = graphene.String()
    password = graphene.String()
    

class CreateUser(graphene.Mutation):
    class Arguments:
        user_data = UsersInput(required=True)

    user = graphene.Field(UsersType)

    @staticmethod
    def mutate(root, info, user_data=None):
        user_instance = Users(
            firstName=user_data.firstName,
            lastName=user_data.lastName,
            email=user_data.email,
            password=user_data.password,
        )        
        user_instance.save()
        return CreateUser(user=user_instance)

class Query(graphene.ObjectType):
    all_users = graphene.List(UsersType)
    user_by_uid = graphene.Field(UsersType, uid=graphene.ID(required=True))

    def resolve_all_users(root, info):
        return Users.objects.all()

    def resolve_user_by_uid(root, info, uid):
        try:
            return Users.objects.get(uid=uid)
        except Users.DoesNotExist:
            return None

class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)