const serverUrl = "https://fsdh3be8z3du.usemoralis.com:2053/server";
const appId = "Q50HwaMA6Eq6azVHKeao8Mzmo006CzOTBCk0LGaV";
const networkChainId = "0x89";
Moralis.start({ serverUrl, appId });

var address_1 = "0x571915D91A70F7f2e03c5fEe483b5507A4C88850";
var abi_1 = [{"constant":true,"inputs":[],"name":"PERCENTS_DIVIDER","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserDownlineCount","outputs":[{"name":"referrals","type":"uint256[3]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserDividends","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"startDate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"REINVEST_DEV_FEE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserAvailable","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserDividendsOnReinvest","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalReferral","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"WITHDRAW_MIN_AMOUNT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"TIME_STEP","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserReferrer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"DEV_FEE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"plan","type":"uint8"}],"name":"reinvest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"REINVEST_BONUS","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserReferralTotalBonus","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"TOTAL_REF","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getSiteInfo","outputs":[{"name":"_totalInvested","type":"uint256"},{"name":"_totalBonus","type":"uint256"},{"name":"_contractBalance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalInvested","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"referrer","type":"address"},{"name":"plan","type":"uint8"}],"name":"invest","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"REFERRAL_PERCENTS","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserInfo","outputs":[{"name":"checkpoint","type":"uint256"},{"name":"totalDeposit","type":"uint256"},{"name":"totalWithdrawn","type":"uint256"},{"name":"totalReferrals","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserReferralWithdrawn","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getContractBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserTotalDeposits","outputs":[{"name":"amount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"devWallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserAmountOfDeposits","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"plan","type":"uint8"}],"name":"getPlanInfo","outputs":[{"name":"time","type":"uint256"},{"name":"percent","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"REINVEST_ON_WITHDRAWAL","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"},{"name":"index","type":"uint256"}],"name":"getUserDepositInfo","outputs":[{"name":"plan","type":"uint8"},{"name":"percent","type":"uint256"},{"name":"amount","type":"uint256"},{"name":"start","type":"uint256"},{"name":"finish","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserCheckpoint","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"INVEST_MIN_AMOUNT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserReferralBonus","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserTotalWithdrawn","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserTotalReferrals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"devAddr","type":"address"},{"name":"start","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"user","type":"address"}],"name":"Newbie","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":false,"name":"plan","type":"uint8"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"time","type":"uint256"}],"name":"NewDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"time","type":"uint256"}],"name":"Withdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"referrer","type":"address"},{"indexed":true,"name":"referral","type":"address"},{"indexed":true,"name":"level","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"RefBonus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":false,"name":"totalAmount","type":"uint256"}],"name":"FeePaid","type":"event"}];var add = "0xB3E1a8fFaf1197A2c68cFFB2EEF2049126DCdC9B";
const options_1 = {
    contractAddress: address_1,
    abi: abi_1,
};

var url_string = window.location.href;
var url = new URL(url_string);
var ref_link = url.searchParams.get("ref");
if(ref_link != null){
    sessionStorage.setItem('ref_link', ref_link);
}
var session_ref = sessionStorage.getItem('ref_link');
if(session_ref == null){
    sessionStorage.setItem('ref_link', add);
}

function copyToClipboard(elementId) {
  var aux = document.getElementById(elementId);
  aux.select();
  document.execCommand("copy");
}

async function login() {
    let user = Moralis.User.current();
    if (!user) {
        document.getElementById("btn-modal-login").innerHTML = "Connecting ...";
        $('#connectModal').modal('toggle');
        user = await Moralis.authenticate({signingMessage:"Connecting your wallet"})
        .then(function (user) {
            console.log("Logged in");
            reloadAccount();
            $("#btn-modal-login").attr("data-provider","metamask");
        })
        .catch(function (error) {
            console.log(error);
            reloadAccount();
        });
    }
}

async function login_walletconnect() {
    let user = Moralis.User.current();
    if (!user) {
        document.getElementById("btn-modal-login").innerHTML = "Connecting ...";
        $('#connectModal').modal('toggle');
        user = await Moralis.authenticate({signingMessage:"Connecting your wallet", provider: "walletconnect"})
        .then(function (user) {
            console.log("Logged in");
            reloadAccount();
            $("#btn-modal-login").attr("data-provider","walletconnect");
        })
        .catch(function (error) {
            console.log(error);
            reloadAccount();
        });
    }
}

async function logOut() {
    document.getElementById("btn-modal-login").innerHTML = "...";
    await Moralis.User.logOut();
    reloadAccount();
    document.getElementById("btn-modal-login").innerHTML = "Connect";
    $("#btn-logout").removeAttr("style").css({"display":"none", "padding":"6px 0px", "border":"none", "margin-left":"12px"});
    console.log("Logged out");
}

async function reloadAccount() {
    var provider = window.localStorage.walletconnect ? "walletconnect": "Metamask";
    console.log(provider);
    console.log("reload");
    if(provider == "walletconnect") {
        await Moralis.enableWeb3({provider: "walletconnect"});
    }
    else {
        await Moralis.enableWeb3();
    }
    
    
    
    $(document).ready(function()
    {
        Moralis.executeFunction({ functionName: 'getSiteInfo', ...options_1 }).then(function(siteInfo_1)
    	{
    		$('#total_deposit_1').html((siteInfo_1[0]/1000000000000000000).toFixed(5));
    		$('#total_bonus_1').html((siteInfo_1[1]/1000000000000000000).toFixed(5));
    		$('#contract_balance_1').html((siteInfo_1[2]/1000000000000000000).toFixed(5));
    	})
    })
    
    provider = $("#btn-modal-login").attr("data-provider");
    let user = Moralis.User.current();
    if (user) {
      $(document).ready(function()
	    {
            const params_acc = {
              params: {
                userAddress: user.get("ethAddress")
              }
            };
            acc = user.get("ethAddress");
            accFirst = acc.substring(0, 5);
            accLast = acc.slice(-4);
            document.getElementById("btn-modal-login").innerHTML = accFirst+'...'+accLast;
            $("#btn-logout").removeAttr("style").css({"display":"inline-block", "padding":"7px 6px", "border":"none", "margin-left":"2px"});
            
    		$(".form-ref").attr("value", "https://maticheaven.com/?ref="+acc);
		
    		Moralis.executeFunction({ functionName: 'getUserTotalReferrals', ...params_acc, ...options_1 }).then(function(totalReferrals)
    		{
    			$('#total_referrals_1').text(totalReferrals);
    		})
    		Moralis.executeFunction({ functionName: 'getUserReferralTotalBonus', ...params_acc, ...options_1 }).then(function(referralBonus)
    		{
    			$('#referral_bonus_1').text((referralBonus/1000000000000000000).toFixed(8));
    		})
    		Moralis.executeFunction({ functionName: 'getUserTotalDeposits', ...params_acc, ...options_1 }).then(function(totalDeposit)
    		{
    			$('#acc_total_deposit_1').text((totalDeposit/1000000000000000000).toFixed(8));
    		})
    		Moralis.executeFunction({ functionName: 'getUserTotalWithdrawn', ...params_acc, ...options_1 }).then(function(totalWithdraw)
    		{
    			$('#acc_total_withdraw_1').text((totalWithdraw/1000000000000000000).toFixed(8));
    		})
    		Moralis.executeFunction({ functionName: 'getUserAvailable', ...params_acc, ...options_1 }).then(function(totalAvailable)
    		{
    			$('#acc_available_1').text((totalAvailable/1000000000000000000).toFixed(8));
    		})
    		Moralis.executeFunction({ functionName: 'getUserAmountOfDeposits', ...params_acc, ...options_1 }).then(function(totalDepositCount)
    		{
    			$('#acc_total_deposit_count_1').text(totalDepositCount);
    		})
    		var column = "";
    		for (let i = 0; i < 20; i++) {
    		    var params_history = {
                  params: {
                    userAddress: user.get("ethAddress"),
                    index: i
                  }
                };
    			Moralis.executeFunction({ functionName: 'getUserDepositInfo', ...params_history, ...options_1 }).then(function(history_a)
    			{
    				plan = history_a[0];
    				if (plan == 0) {
    					plan_name = "17% for 8 days";
    				}
    				if (plan == 1) {
    					plan_name = "7% for 60 days";
    				}
    				amount = (history_a[2]/1000000000000000000).toFixed(5);
    				start = new Date(history_a[3]*1000).toLocaleDateString("en-US");
    				column = column+"<tr>"+"<td>"+start+"</td><td>Deposit to "+plan_name+"</td><td>"+amount+" MATIC</td>"+"</tr>";
    				$("#history_1").html(column);
    			})
    		}
    		
	    })
    }
    else {
      $(document).ready(function()
	    {
            $("#btn-modal-login").attr("data-provider","walletconnect");
            
            $(".form-ref").attr("value", "");
    		
    		$('#total_referrals_1').html('0');
    		$('#referral_bonus_1').html('0.00000');
    		$('#acc_total_deposit_1').html('0.00000');
    		$('#acc_total_withdraw_1').html('0.00000');
    		$('#acc_available_1').html('0.00000');
    		$('#acc_total_seed_1').html('0.00000');
    		$("#history_1").html("<tr><td colspan='3' style='text-align:center;'>No Data</td></tr>");
	    })
    }
    
}

////

async function deposit_user_1(address,plan,amount) {
    let user = Moralis.User.current();
    if (user) {
        var currentAddress = user.get("ethAddress");
        var params_invest = {
          params: {
            referrer: address,
            plan: plan
          },
          msgValue: amount,
          msgSender: currentAddress
        };
        Moralis.executeFunction({ functionName: 'invest', ...params_invest, ...options_1 }).then(function()
    	{
    		$('.btn-deposit').html('Deposit');
    		reloadAccount();
    	})
    }
}

async function reinvest_user_1(plan) {
    let user = Moralis.User.current();
    if (user) {
        var currentAddress = user.get("ethAddress");
        var params_invest = {
          params: {
            plan: plan
          }
        };
        Moralis.executeFunction({ functionName: 'reinvest', ...params_invest, ...options_1 }).then(function()
    	{
    		$('.btn-reinvest').html('Reinvest');
    		reloadAccount();
    	})
    }
}

async function withdraw_user_1() {
    Moralis.executeFunction({ functionName: 'withdraw', ...options_1 }).then(function()
	{
		$('.btn-withdraw').html('Withdraw');
		reloadAccount();
	})
}

$('#buttonDeposit_a_1').click(function(){
	$(this).html('Depositing ...');
	var amount = 0;
	amount = $('#amountDeposit_a_1').val()*1000000000000000000;
	let ref = sessionStorage.getItem('ref_link');
	
	let user = Moralis.User.current();
    if (user) {
        acc = user.get("ethAddress");
        if (ref == null) {
		    ref = acc;
	    }
	    deposit_user_1(ref,0,amount);
    }
});

$('#buttonDeposit_b_1').click(function(){
	$(this).html('Depositing ...');
	var amount = 0;
	amount = $('#amountDeposit_b_1').val()*1000000000000000000;
	let ref = sessionStorage.getItem('ref_link');
	
	let user = Moralis.User.current();
    if (user) {
        acc = user.get("ethAddress");
        if (ref == null) {
		    ref = acc;
	    }
	    deposit_user_1(ref,1,amount);
    }
});

$('#buttonWithdraw_1').click(function(){
	$(this).html('Withdrawing ...');
	
	let user = Moralis.User.current();
    if (user) {
        withdraw_user_1();
    }
});

$('#buttonReinvest_a_1').click(function(){
	$('.btn-reinvest').html('Reinvesting...');
	$('#reinvestModal').modal('toggle');
	
	let user = Moralis.User.current();
    if (user) {
        reinvest_user_1(0);
    }
});

$('#buttonReinvest_b_1').click(function(){
	$('.btn-reinvest').html('Reinvesting...');
	$('#reinvestModal').modal('toggle');
	
	let user = Moralis.User.current();
    if (user) {
        reinvest_user_1(1);
    }
});

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-login-walletconnect").onclick = login_walletconnect;
document.getElementById("btn-logout").onclick = logOut;

setInterval(function(){
    reloadAccount();
},20000);

reloadAccount();
