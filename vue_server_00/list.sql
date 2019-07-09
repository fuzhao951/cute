#db.sql 数据库脚本文件
SET NAMES UTF8;
DROP DATABASE IF EXISTS cute;
CREATE DATABASE cute CHARSET="UTF8";
USE cute;
#登录
CREATE TABLE c_login(
    id INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(25),
    upass VARCHAR(32)
);
INSERT INTO c_login VALUES(null,'tom',md5('123'));
INSERT INTO c_login VALUES(null,'jerry',md5('123'));

#菜品列表
CREATE TABLE c_list(
 id INT PRIMARY KEY AUTO_INCREMENT,
 sname VARCHAR(25),
 price DECIMAL(10,2),
 type VARCHAR(25),
 ssrc  VARCHAR(255),
 lsrc VARCHAR(225)
);
#drink+饮料
INSERT INTO c_list VALUES(null,'冰粉','15','饮料酒水','drink/bingfen.jpg','drink/bingfen1.jpg');
INSERT INTO c_list VALUES(null,'冰桔茶','38','饮料酒水','drink/bingjucha.jpg','drink/bingjucha1.jpg');
INSERT INTO c_list VALUES(null,'橙汁','38','饮料酒水','drink/chengzhi.jpg','drink/chengzhi1.jpg');
INSERT INTO c_list VALUES(null,'可乐','20','饮料酒水','drink/kelebig.jpg','drink/kelebig1.jpg');
INSERT INTO c_list VALUES(null,'绿雨','22','饮料酒水','drink/lvyu.jpg','drink/lvyu1.jpg');
INSERT INTO c_list VALUES(null,'芒果汁','22','饮料酒水','drink/mangguozhi.jpg','drink/mangguozhi1.jpg');
INSERT INTO c_list VALUES(null,'蜜桃乌龙','28','饮料酒水','drink/mitaowulong.jpg','drink/mitaowulong1.jpg');
INSERT INTO c_list VALUES(null,'千岛湖啤酒','20','饮料酒水','drink/qiandaohu.jpg','drink/qiandaohu1.jpg');
INSERT INTO c_list VALUES(null,'西瓜汁','28','饮料酒水','drink/xiguazhi.jpg','drink/xiguazhi1.jpg');
INSERT INTO c_list VALUES(null,'瓶装雪碧','15','饮料酒水','drink/xuebibig.jpg','drink/xuebibig1.jpg');
INSERT INTO c_list VALUES(null,'听装雪碧','8','饮料酒水','drink/xuebismall.jpg','drink/xuebismall1.jpg');
INSERT INTO c_list VALUES(null,'玉米汁','28','饮料酒水','drink/yumizhi.jpg','drink/yumizhi1.jpg');
#other+锅底
INSERT INTO c_list VALUES(null,'魔鬼辣+菌汤+番茄','94','火锅锅底','other/fanqiemala.jpg','other/fanqiemala1.jpg');
INSERT INTO c_list VALUES(null,'红汤+菌汤','98','火锅锅底','other/hongtangjuntang.jpg','other/hongtangjuntang1.jpg');
INSERT INTO c_list VALUES(null,'九宫格','98','火锅锅底','other/jiugongge.jpg','other/jiugongge1.jpg');
INSERT INTO c_list VALUES(null,'老成都火锅','98','火锅锅底','other/laochengdu.jpg','other/laochengdu1.jpg');
INSERT INTO c_list VALUES(null,'辣汤+原骨汤','98','火锅锅底','other/latangyuangu.jpg','other/latangyuangu1.jpg');
INSERT INTO c_list VALUES(null,'老成都火锅','98','火锅锅底','other/laochengdu.jpg','other/laochengdu1.jpg');
INSERT INTO c_list VALUES(null,'清汤','98','火锅锅底','other/qingtang.jpg','other/qingtang1.jpg');
INSERT INTO c_list VALUES(null,'清汤+番茄','98','火锅锅底','other/qingtangfanqie.jpg','other/qingtangfanqie1.jpg');
#INSERT INTO c_list VALUES(null,'调味料','8','火锅锅底','other/tiaoliao.jpg','other/tiaoliao.jpg');
#vegetable+蔬菜
INSERT INTO c_list VALUES("null","葱油饼","20","蔬菜系列","vegetable/congyoubing.jpg","vegetable/congyoubing1.jpg");
INSERT INTO c_list VALUES("null","腐竹","12","蔬菜系列","vegetable/fuzhu.jpg","vegetable/fuzhu1.jpg");
INSERT INTO c_list VALUES("null","菌菇拼盘","24","蔬菜系列","vegetable/jungupinpan.jpg","vegetable/jungupinpan1.jpg");
#INSERT INTO c_list VALUES("null","蔬菜拼盘","24","蔬菜系列","vegetable/shucaipinpan.jpg","vegetable/shucaipinpan1.jpg");
INSERT INTO c_list VALUES("null","莴笋","18","蔬菜系列","vegetable/wosun.jpg","vegetable/wosun1.jpg");
INSERT INTO c_list VALUES("null","鲜香菇","17","蔬菜系列","vegetable/xianxianggu.jpg","vegetable/xianxianggu1.jpg");
INSERT INTO c_list VALUES("null","竹笋","16","蔬菜系列","vegetable/zhusun.jpg","vegetable/zhusun1.jpg");
#meat肉类
#INSERT INTO c_list VALUES(null,'鹅肠','38','荤食涮煮系列','meat/echang4.gif','meat/echang1.jpg');
INSERT INTO c_list VALUES(null,'肥肠结','48','荤食涮煮系列','meat/feichang.jpg','meat/feichang1.jpg');
INSERT INTO c_list VALUES(null,'锡盟肥羊肉','58','荤食涮煮系列','meat/feiyang.jpg','meat/feiyang1.jpg');
INSERT INTO c_list VALUES(null,'黄喉','48','荤食涮煮系列','meat/huanghou.jpg','meat/huanghou1.jpg');
INSERT INTO c_list VALUES(null,'鸡爪','28','荤食涮煮系列','meat/jizhua.jpg','meat/jizhua1.jpg');
INSERT INTO c_list VALUES(null,'鸿运毛肚','58','荤食涮煮系列','meat/maodu.jpg','meat/maodu1.jpg');
INSERT INTO c_list VALUES(null,'明虾','58','荤食涮煮系列','meat/mingxia.jpg','meat/mingxia1.jpg');
INSERT INTO c_list VALUES(null,'目鱼蛋','48','荤食涮煮系列','meat/muyudan.jpg','meat/muyudan1.jpg');
INSERT INTO c_list VALUES(null,'大泥鳅','48','荤食涮煮系列','meat/niqiu.jpg','meat/niqiu1.jpg');
INSERT INTO c_list VALUES(null,'酱牛肉','58','荤食涮煮系列','meat/niurou.jpg','meat/niurou1.jpg');
#INSERT INTO c_list VALUES(null,'四川酥肉','28','荤食涮煮系列','meat/surou.jpg','meat/surou1.jpg');
#INSERT INTO c_list VALUES(null,'小腊肠','38','荤食涮煮系列','meat/xiaolachang.jpg','meat/xiaolachang1.jpg');
INSERT INTO c_list VALUES(null,'大刀腰片','48','荤食涮煮系列','meat/yaopian.jpg','meat/yaopian1.jpg');
INSERT INTO c_list VALUES(null,'猪脑','28','荤食涮煮系列','meat/zhunao.jpg','meat/zhunao1.jpg');
INSERT INTO c_list VALUES(null,'火锅龙虾','268','荤食涮煮系列','meat/xiaolongxia.jpg','meat/xiaolongxia1.jpg');

#完成购物车功能
CREATE TABLE c_cart(
 id INT PRIMARY KEY AUTO_INCREMENT,
 sname VARCHAR(25),
 type VARCHAR(25),	
 src VARCHAR(255),
 uid INT,
 price DECIMAL(10,2),
 count INT
);




