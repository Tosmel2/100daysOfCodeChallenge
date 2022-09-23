from django.shortcuts import redirect, render
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout


# Create your views here.
def home(request):
  return render(request, "authentication_app/index.html")

def signup(request):
  if request.method == "POST":
    # username = request.POST.get("username")
    username = request.POST['username']
    fname = request.POST['fname']
    lname = request.POST['lname']
    email = request.POST['email']
    pwd1 = request.POST['pwd1']
    pwd2 = request.POST['pwd2']

    myuser = User.objects.create_user(username, email, pwd1)
    myuser.first_name = fname
    myuser.last_name = lname
    myuser.save()

    messages.success(request, "Your account has been successfully created")
    return redirect("signin")

  return render(request, "authentication_app/signup.html")

def signin(request):
  if request.method == "POST":
    username = request.POST['username']
    pwd1 = request.POST['pwd1']

    user = authenticate(username=username, password=pwd1)

    if user is not None:
      login(request, user)
      fname = user.first_name
      messages.success(request, "Successfully Logged In")
      return render(request, "authentication_app/index.html", {'fname': fname})
      # return redirect(request, "authentication_app/index.html", {'fname': user.first_name})
    else:
      messages.error(request, "Invalid Credentials, Please try again")
      return redirect("home")
  return render(request, "authentication_app/signin.html")

def signout(request):
  logout(request)
  messages.success(request, "Successfully Logged Out")
  return redirect("home")