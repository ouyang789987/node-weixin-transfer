
			var WeixinTransfer = require(__dirname+'/index');
			var wt = new WeixinTransfer();
			wt.transfer({mch_appid: "wxe062425f740c30d8"
			    , mchid: "10000098"
			    , nonce_str: "3PG2J4ILTKCH16CQ2502SI8ZNMTM67VS"
			    , partner_trade_no: "100000982014120919616"
			    , openid: "ohO4Gt7wVPxIT1A9GjFaMYMiZY1s"
			    , check_name: "OPTION_CHECK"
			    , re_user_name: "张三"
			    , amount: "100"
			    , desc: "节日快乐!"
			    , spbill_create_ip: "10.2.3.10"
			    , sign: ""
			    , cert: ""
			    , ca: ""
			},function(err,results){
			    if (err) throw err;
			    //do stuff!
			    console.log(results);
			})