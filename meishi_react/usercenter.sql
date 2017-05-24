/*
Navicat MySQL Data Transfer

Source Server         : H51615
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : usercenter

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-05-08 20:42:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for personal
-- ----------------------------
DROP TABLE IF EXISTS `personal`;
CREATE TABLE `personal` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `p_account` char(50) NOT NULL COMMENT '账号',
  `p_secret` char(128) NOT NULL COMMENT '密码',
  `p_mobile` char(11) NOT NULL DEFAULT '' COMMENT '手机号',
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=108 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of personal
-- ----------------------------
INSERT INTO `personal` VALUES ('15', '11111122t', '123456783', '18325553696');
INSERT INTO `personal` VALUES ('28', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('27', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('26', 'td', '123213123', '15269612127');
INSERT INTO `personal` VALUES ('25', 'td', '123213123', '15269612127');
INSERT INTO `personal` VALUES ('24', 'td', '123213123', '15269612127');
INSERT INTO `personal` VALUES ('23', 'td', '123213123', '15269612127');
INSERT INTO `personal` VALUES ('22', 'td', '123213123', '15269612127');
INSERT INTO `personal` VALUES ('21', 'td', '123213123', '15269612127');
INSERT INTO `personal` VALUES ('20', 'td', '123213123', '15269612127');
INSERT INTO `personal` VALUES ('19', 'td', '123213123', '15269612127');
INSERT INTO `personal` VALUES ('18', 'td', '123213123', '15269612127');
INSERT INTO `personal` VALUES ('17', 'td', '123213123', '15269612127');
INSERT INTO `personal` VALUES ('16', 'td', '123213123', '15269612127');
INSERT INTO `personal` VALUES ('29', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('30', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('31', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('32', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('33', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('34', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('35', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('36', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('37', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('38', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('39', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('40', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('41', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('42', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('43', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('44', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('45', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('46', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('47', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('48', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('49', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('50', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('51', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('52', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('53', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('54', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('55', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('56', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('57', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('58', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('59', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('60', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('61', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('62', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('63', 'td', '1234343432', '15269612127');
INSERT INTO `personal` VALUES ('64', 'td', '31232131', '15269612127');
INSERT INTO `personal` VALUES ('65', 'td', '31232131', '15269612127');
INSERT INTO `personal` VALUES ('66', 'td', '31232131', '15269612127');
INSERT INTO `personal` VALUES ('67', 'td', '31232131', '15269612127');
INSERT INTO `personal` VALUES ('68', 'td', '31232131', '15269612127');
INSERT INTO `personal` VALUES ('69', 'td', '31232131', '15269612127');
INSERT INTO `personal` VALUES ('70', 'td', '31232131', '15269612127');
INSERT INTO `personal` VALUES ('71', 'td', '31232131', '15269612127');
INSERT INTO `personal` VALUES ('72', 'td', '31232131', '15269612127');
INSERT INTO `personal` VALUES ('73', 'td', '1232321321', '15269612127');
INSERT INTO `personal` VALUES ('74', 'td', '1232321321', '15269612127');
INSERT INTO `personal` VALUES ('75', 'td', '', '15269612127');
INSERT INTO `personal` VALUES ('76', 'td', '', '15269612127');
INSERT INTO `personal` VALUES ('77', 'td', '', '15269612127');
INSERT INTO `personal` VALUES ('78', 'td', '', '15269612127');
INSERT INTO `personal` VALUES ('79', 'td', '', '15269612127');
INSERT INTO `personal` VALUES ('80', 'td', '', '15269612127');
INSERT INTO `personal` VALUES ('81', '123rrr', '323213213', '15269612127');
INSERT INTO `personal` VALUES ('82', '123rrr', '323213213', '15269612127');
INSERT INTO `personal` VALUES ('83', '123rrr', '323213213', '15269612127');
INSERT INTO `personal` VALUES ('84', '123rrr', '323213213', '15269612127');
INSERT INTO `personal` VALUES ('85', '123rrr', '323213213', '15269612127');
INSERT INTO `personal` VALUES ('86', '123rrr', '323213213', '15269612127');
INSERT INTO `personal` VALUES ('87', '3213tr', '', '15269612127');
INSERT INTO `personal` VALUES ('88', '3213tr', '112321321', '15269612127');
INSERT INTO `personal` VALUES ('89', '3213tr', '', '15269612127');
INSERT INTO `personal` VALUES ('90', '3213tr', 'ewqewqewqewqewqewqewe', '15269612127');
INSERT INTO `personal` VALUES ('91', 'tfd', '21321321321', '15269612127');
INSERT INTO `personal` VALUES ('92', 'td', '123213213', '15269612127');
INSERT INTO `personal` VALUES ('93', 'tds', '321321321', '15269612127');
INSERT INTO `personal` VALUES ('94', 'td', '321321321', '15269612127');
INSERT INTO `personal` VALUES ('95', 'td', '321321321', '15269612127');
INSERT INTO `personal` VALUES ('96', 'pppp', '232132131', '15269612127');
INSERT INTO `personal` VALUES ('97', 'pppp', '232132131', '15269612127');
INSERT INTO `personal` VALUES ('98', '123t', '23213213', '15269612127');
INSERT INTO `personal` VALUES ('99', '123t', '23213213', '15269612127');
INSERT INTO `personal` VALUES ('100', 'sss', 'sssssss', '');
INSERT INTO `personal` VALUES ('101', 'sss', 'sssssss', '');
INSERT INTO `personal` VALUES ('102', 'gfdsgffdgfdgdds', 'dfgdfgfdgdfgdfg', '');
INSERT INTO `personal` VALUES ('103', '321321', '321321321', '');
INSERT INTO `personal` VALUES ('104', '15269612127', '31321321', '');
INSERT INTO `personal` VALUES ('105', '15269612127', '31321321', '');
INSERT INTO `personal` VALUES ('106', '15269612127', '31321321', '');
INSERT INTO `personal` VALUES ('107', '15269612127', '123456789', '');
