# VARIABLE=VALUE sh curl-scripts/auth/sign-up.sh

# don't use a password you use for any real websites!
curl "https://tic-tac-toe-wdi.herokuapp.com/games/:id" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}" \
  --header "id: id id=${ID}" \
  --header "Content-Type: application/json" \
  --data '{
    data: formData

  }'

#   Use this code in terminal to run the file:
#   EMAIL=fun3@fun PW=123 PW=123 \
# > sh curl-scripts/auth/sign-up.sh
# put json value into the data object we are creating, using "'"${}"'"
echo
