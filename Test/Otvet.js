<script>
function proverit(){
pr_otv_zadachi_1 = 55;
pr_otv_zadachi_2 = -9;
pr_otv_zadachi_3 = 85;
otv_uch_1 = document.getElementById('z_1').value;
otv_uch_2 = document.getElementById('z_2').value;
otv_uch_3 = document.getElementById('z_3').value;
ball = 0;
if(otv_uch_1 == pr_otv_zadachi_1){
ball +=1;
}
if(otv_uch_2 == pr_otv_zadachi_2){
ball +=1;
}
if(otv_uch_3 == pr_otv_zadachi_3){
ball +=1;
}
vsego_zadach = 3;
procent_vip = ball/vsego_zadach * 100;
document.getElementById('rezultat').innerHTML = "Задания выполнены верно на "+procent_vip+"%.";
}
</script>