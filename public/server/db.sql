#设置编码
SET NAMES UTF8;

#如果存在,删除数据库
DROP DATABASE IF EXISTS MyEmail;

#新建数据库
CREATE DATABASE MyEmail CHARSET=UTF8;

#进入数据库
USE MyEmail;

#新建ME_email表
CREATE TABLE ME_Email(
    id INT PRIMARY KEY AUTO_INCREMENT,
    sName VARCHAR(128),
    sEmail VARCHAR(128),
    sPhone VARCHAR(32),
    sContent VARCHAR(512),
    sTime VARCHAR(32)
);
