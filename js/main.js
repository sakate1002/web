
const poolData = {
	UserPoolId: 'ap-southeast-2_YeSQpiyYG', // ユーザープール固有のID（メモした値）
	ClientId: 'pj1ftubiag8ba3bhao7d9vkat', // クライアント固有のID（メモした値）
};

// signup.html
function SignUp() {
	var username = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

	userPool.signUp(username, password, null, null, function(
		err,
		result
	) {
		if (err) {
		alert(err.message || JSON.stringify(err));
			return;
		}
		var cognitoUser = result.user;
		console.log('user name is ' + cognitoUser.getUsername());
		window.location.href = 'confirm.html';
	});
}

// confirm.html
function ConfirmRegistration() {
	var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
	var username = document.getElementById("email").value;
	var code = document.getElementById("ConfirmCode").value;
	var userData = {
		Username: username,
		Pool: userPool,
	};
	var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

	cognitoUser.confirmRegistration(code, true, function(err, result) {
		if (err) {
			alert(err.message || JSON.stringify(err));
			return;
		}
		console.log('call result: ' + result);
		window.location.href = 'login.html';		
	});
}

// login.html
function LoginUser() {

	var username = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	var authenticationData = {
		Username: username,
		Password: password,
	};

	var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
		authenticationData
	);
	var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
	var userData = {
		Username: username,
		Pool: userPool,
	};

	var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
	cognitoUser.authenticateUser(authenticationDetails, {
		onSuccess: function(result) {
            var idToken = result.getIdToken().getJwtToken();          // IDトークン
			var accessToken = result.getAccessToken().getJwtToken();  // アクセストークン
            var refreshToken = result.getRefreshToken().getToken();   // 更新トークン
            
            console.log("idToken : " + idToken);
            console.log("accessToken : " + accessToken);
            console.log("refreshToken : " + refreshToken);

			AWS.config.region = 'ap-southeast-2';

			AWS.config.credentials = new AWS.CognitoIdentityCredentials({
				IdentityPoolId: 'ap-southeast-2:be10e1d0-a757-401b-8b18-b6519e2b4aa0', // IDプールの値（メモした値）
				Logins: {
					// Change the key below according to the specific region your user pool is in.
					'cognito-idp.us-east-1.amazonaws.com/us-east-1_xxxxxx': result
						.getIdToken()
						.getJwtToken(),
				},
			});

			AWS.config.credentials.refresh(error => {
				if (error) {
					console.error(error);
				} else {
					console.log('Successfully logged!');
				}
			});
			alert("ようこそ！！")
			window.location.href = 'home.html';
		},

		onFailure: function(err) {
			//alert(err.message || JSON.stringify(err));
			alert("パスワードが違うみたいです")
		},
	});
}
