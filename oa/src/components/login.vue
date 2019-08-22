<template>
	<div class="denglu">
		<div class="logo">
			<img src="../assets/login.jpg" alt="">
		</div>
		<div class="weui_cells">
			<div class="login">
				<div class="weui_cell">
					<div class="weui_cell_hd">
						<label class="weui_label">用户名</label>
					</div>
					<div class="weui_bd">
						<input type="text" placeholder="请输入用户名/姓名/手机号" class="username" v-model="newuser">
					</div>
				</div>
				<div class="weui_cell">
					<div class="weui_cell_hd">
						<label class="weui_label">密码</label>
					</div>
					<div class="weui_bd">
						<input type="password" placeholder="请输入密码" class="passwork" v-model="newpass">
					</div>
				</div>
			</div>
		</div>
		<div class="weui_bth">
			<input type="button" value="登录" class="weui_btn_primary" @click="container">
		</div>
	</div>
</template>

<script>
export default {
	name: "login",
	props: {
		msg: String
	},
	data: function() {
		return {
			newuser: "",
			newpass: ""
		};
	},
	methods: {
		container: function() {
			this.axios.post('http://127.0.0.1:9090/api.php?m=login&a=check&device=1544081695825&cfrom=mweb',{
				data:{
                    user:'eXM:',
					pass:'MTIzNDU2',
					ltype:'',
					token:'',
					yanzm:''
				}	
		     	})
			.then(function(response) {
				 console.log(response);
				 var data = response.data
				 console.log("data",data);

            //    if (data && data.Code == 200) {
            //        this.$router.push({
			// 		path: "/Container"
			// 	})}
			if (this.newuser == data.user && this.newpass == data.pass) {
					this.$router.push({
					path: "/Container"
				})
			}
			})
				.catch(function(error) {
					console.log(error);
				});
			if (!this.newuser) {
				this.$message("请输入用户名！");
				return;
			}
			if (!this.newpass) {
				this.$message("请输入密码!");
				return;
			} else {
				this.$router.push({
					path: "/Container"
				});
			}
		},
	   loginInfo:function(){
			// this.axios.post('http://127.0.0.1:9090/api.php?m=login&a=check&device=1544081695825&cfrom=mweb',{
			// 	user:'',
			// 	pass:'',
			// 	ltype:'',
			// 	token:'',
			// 	yanzm:''
		    //  	})
			// .then(function(response) {
			// 	//  console.log(response);
			// 	 var data = response.data
			// 	 console.log("data",data);

            // //    if (data && data.Code == 200) {
            // //        this.$router.push({
			// // 		path: "/Container"
			// // 	})}
			// if (this.newuser == data.user && this.newpass == data.pass) {
			// 		this.$router.push({
			// 		path: "/Container"
			// 	})
			// }
			// })
			// 	.catch(function(error) {
			// 		console.log(error);
			// 	});
		}
	}
};
</script>
<style scoped>
* {
	margin: 0;
	padding: 0;
}
a {
	text-decoration: none;
	color: black;
}
.denglu {
	width: 100%;
	height: 100vh;
}
.logo {
	background-color: #fbf9fe;
	width: 100%;
	height: 126px;
	display: block;
	padding: 2em 0;
	text-align: center;
	margin: 0 auto;
}
.logo img {
	width: 100px;
	height: 100px;
	border-radius: 50%;
}
.weui_cells {
	width: 100%;
	font-size: 17px;
	margin-top: 10px;
	line-height: 1.5;
	background-color: #fff;
	position: relative;
}
.weui_cells .login {
	width: 100%;
}
.weui_cells .login::after {
	content: " ";
	position: absolute;
	bottom: 0px;
	width: 100%;
	height: 1px;
	border-top: 1px solid #d9d9d9;
	color: #d9d9d9;
	left: 0px;
}
.weui_cells .login .weui_cell {
	padding: 10px 15px;
	display: flex;
	align-items: center;
}
.weui_cells .login .weui_cell::after {
	content: " ";
	position: absolute;
	top: 0px;
	width: 100%;
	height: 1px;
	border-top: 1px solid #d9d9d9;
	color: #d9d9d9;
	left: 0px;
}
.weui_cells .login .weui_cell::before {
	content: " ";
	position: absolute;
	top: 45px;
	width: 100%;
	height: 1px;
	border-top: 1px solid #d9d9d9;
	color: #d9d9d9;
	left: 15px;
}
.weui_cells .login .weui_cell .weui_cell_hd label {
	width: 80px;
	display: block;
}
.weui_cells .login .weui_cell .weui_bd {
	flex: 1;
}
.weui_cells .login .weui_cell .weui_bd input {
	width: 100%;
	border: 0;
	outline: 0;
	-webkit-appearance: none;
	background-color: transparent;
	font-size: inherit;
	color: inherit;
	height: 1.41176471em;
	line-height: 1.41176471;
}
.weui_bth {
	width: 100%;
	margin: 10px 0;
	text-align: center;
}
.weui_bth a {
	text-decoration: none;
}
.weui_bth input {
	width: 90%;
	border-width: 0;
	outline: 0;
	position: relative;
	display: block;
	margin-left: auto;
	margin-right: auto;
	padding-left: 14px;
	padding-right: 14px;
	box-sizing: border-box;
	font-size: 18px;
	text-align: center;
	text-decoration: none;
	color: #fff;
	line-height: 2.33333333;
	border-radius: 5px;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	overflow: hidden;
}
.weui_bth .weui_btn_primary {
	background-color: #1389d3;
}
</style>
