from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import (
    RegisterView,
    LoginView,
    LogoutView,
    UserDetailView,
    reset_password,
    send_otp,
    send_otpV2,
    verify_otp,
)

urlpatterns = [
    # Authentication endpoints
    path('signup/', RegisterView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    
    # Token management
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    # User management
    path('user/', UserDetailView.as_view(), name='user-detail'),
    path('reset-password/', reset_password, name='reset-password'),
    path('send-otp/', send_otp, name='send-otp'),
    path('send-otpV2/', send_otpV2, name='send-otpV2'),
    path('verify-otp/', verify_otp, name='verify-otp'),
]