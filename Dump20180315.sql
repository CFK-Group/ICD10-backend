CREATE DATABASE  IF NOT EXISTS `invidi` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `invidi`;
-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: invidi
-- ------------------------------------------------------
-- Server version	5.6.38

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `campania`
--

DROP TABLE IF EXISTS `campania`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `campania` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orderid` varchar(45) NOT NULL COMMENT 'Número asignado a la campaña',
  `nombre` varchar(45) NOT NULL COMMENT 'el nombre de la campaña',
  `Inicio` datetime NOT NULL COMMENT 'Fecha de inicio de la campaña',
  `fin` datetime DEFAULT NULL COMMENT 'fecha de termino de la campaña, puede no estar veteada',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `campania`
--

LOCK TABLES `campania` WRITE;
/*!40000 ALTER TABLE `campania` DISABLE KEYS */;
INSERT INTO `campania` VALUES (1,'1021','Unilever - Walmart','2018-03-01 00:00:00','2018-04-07 00:00:00'),(2,'9999','Campaña de prueba','0000-00-00 00:00:00',NULL);
/*!40000 ALTER TABLE `campania` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `campania_has_target`
--

DROP TABLE IF EXISTS `campania_has_target`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `campania_has_target` (
  `campania_id` int(11) NOT NULL,
  `target_id` int(11) NOT NULL,
  PRIMARY KEY (`campania_id`,`target_id`),
  KEY `fk_campania_has_target_target1_idx` (`target_id`),
  KEY `fk_campania_has_target_campania1_idx` (`campania_id`),
  CONSTRAINT `fk_campania_has_target_campania1` FOREIGN KEY (`campania_id`) REFERENCES `campania` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_campania_has_target_target1` FOREIGN KEY (`target_id`) REFERENCES `target` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `campania_has_target`
--

LOCK TABLES `campania_has_target` WRITE;
/*!40000 ALTER TABLE `campania_has_target` DISABLE KEYS */;
/*!40000 ALTER TABLE `campania_has_target` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `canal`
--

DROP TABLE IF EXISTS `canal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `canal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombreCanal` varchar(45) NOT NULL,
  `nGrilla` int(11) NOT NULL COMMENT 'Número del canal en la grilla de TV',
  `nTB` int(11) NOT NULL COMMENT 'Número de Traffic & Billing',
  `nNetwork` int(11) NOT NULL COMMENT 'Número de network',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `canal`
--

LOCK TABLES `canal` WRITE;
/*!40000 ALTER TABLE `canal` DISABLE KEYS */;
INSERT INTO `canal` VALUES (1,'Warner',33,5,50054),(2,'Discovery',61,6,50049),(4,'AXN',60,7,50008);
/*!40000 ALTER TABLE `canal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `icd10`
--

DROP TABLE IF EXISTS `icd10`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `icd10` (
  `CardID` text,
  `OrderLineID` text,
  `BreakID` text,
  `Network` text,
  `BroadcastCueTime` text,
  `ActualPlayTime` text,
  `BreakWindowStartTime` text,
  `BreakWindowEndTime` text,
  `BreakNumber` text,
  `Offset` text,
  `StatusType` text,
  `StatusCode` text,
  `NumerOfSecondViewed` text,
  `NumerOfSecondViewedInNormalMode` text,
  `NumerOfSecondViewedInTrickMode` text,
  `NumberOfSecondPaused` text,
  `TunerType` text,
  `BoxType` text,
  `TimeZone` text,
  `WatchProbability` text,
  `TimeSinceLastKeyPress` text,
  `CompatibilityIndex` text,
  `ZoneId` text,
  `TunerId` text,
  `DeviceId` text,
  `DeviceType` text,
  `AdPlayFrequency` text,
  `SecuenceNumber` text,
  `GatewayId` text,
  `Billable` text,
  `OrderlineType` text,
  `BreakAllocation` text,
  `ViewingMode` text,
  `STBModel` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `icd10`
--

LOCK TABLES `icd10` WRITE;
/*!40000 ALTER TABLE `icd10` DISABLE KEYS */;
/*!40000 ALTER TABLE `icd10` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderline`
--

DROP TABLE IF EXISTS `orderline`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orderline` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `numero` varchar(45) NOT NULL COMMENT 'numero del orderline',
  `nombre` varchar(45) NOT NULL COMMENT 'Nombre del orderline ',
  `prioridad` varchar(45) NOT NULL,
  `campania_id` int(11) NOT NULL,
  `spot_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`campania_id`,`spot_id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_orderline_campania1_idx` (`campania_id`),
  KEY `fk_orderline_spot1_idx` (`spot_id`),
  CONSTRAINT `fk_orderline_campania1` FOREIGN KEY (`campania_id`) REFERENCES `campania` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_orderline_spot1` FOREIGN KEY (`spot_id`) REFERENCES `spot` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderline`
--

LOCK TABLES `orderline` WRITE;
/*!40000 ALTER TABLE `orderline` DISABLE KEYS */;
INSERT INTO `orderline` VALUES (1,'1045','CIF - WALMART - ÑUÑOA','20',1,1),(2,'1046','CIF - WALMART - LA REINA','20',1,2),(3,'9999','Orderline de prueba','20',2,3);
/*!40000 ALTER TABLE `orderline` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderline_has_canal`
--

DROP TABLE IF EXISTS `orderline_has_canal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orderline_has_canal` (
  `orderline_id` int(11) NOT NULL,
  `canal_id` int(11) NOT NULL,
  PRIMARY KEY (`orderline_id`,`canal_id`),
  KEY `fk_orderline_has_canal_canal1_idx` (`canal_id`),
  KEY `fk_orderline_has_canal_orderline_idx` (`orderline_id`),
  CONSTRAINT `fk_orderline_has_canal_canal1` FOREIGN KEY (`canal_id`) REFERENCES `canal` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_orderline_has_canal_orderline` FOREIGN KEY (`orderline_id`) REFERENCES `orderline` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderline_has_canal`
--

LOCK TABLES `orderline_has_canal` WRITE;
/*!40000 ALTER TABLE `orderline_has_canal` DISABLE KEYS */;
/*!40000 ALTER TABLE `orderline_has_canal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sch`
--

DROP TABLE IF EXISTS `sch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sch` (
  `﻿EventType` text,
  `ScheduleDate` text,
  `ScheduleTime` text,
  `WindowStart` text,
  `WindowDuration` text,
  `BreakNumber` text,
  `PositionNumber` text,
  `ScheduleLength` text,
  `ActualAiredTime` text,
  `ActualAiredLength` text,
  `ActualAiredPosition` text,
  `SpotId` text,
  `StatusCode` text,
  `SomeCode` text,
  `SpotName` text,
  `SCH` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sch`
--

LOCK TABLES `sch` WRITE;
/*!40000 ALTER TABLE `sch` DISABLE KEYS */;
/*!40000 ALTER TABLE `sch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `spot`
--

DROP TABLE IF EXISTS `spot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `spot` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `seachangeCode` varchar(45) NOT NULL COMMENT 'Id del spot en sea change',
  `isAsset` tinyint(4) NOT NULL COMMENT 'valida si el spot es un asset para una campaña',
  `isAgi` tinyint(4) NOT NULL COMMENT 'Valida si el spot es un default para el mateo que realiza invidi',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spot`
--

LOCK TABLES `spot` WRITE;
/*!40000 ALTER TABLE `spot` DISABLE KEYS */;
INSERT INTO `spot` VALUES (1,'45957',1,0),(2,'45058',1,0),(3,'99999',0,0);
/*!40000 ALTER TABLE `spot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stb`
--

DROP TABLE IF EXISTS `stb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `UA` varchar(45) DEFAULT NULL,
  `Hexa` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `UA_UNIQUE` (`UA`),
  UNIQUE KEY `Hexa_UNIQUE` (`Hexa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stb`
--

LOCK TABLES `stb` WRITE;
/*!40000 ALTER TABLE `stb` DISABLE KEYS */;
/*!40000 ALTER TABLE `stb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stb_has_target`
--

DROP TABLE IF EXISTS `stb_has_target`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stb_has_target` (
  `stb_id` int(11) NOT NULL,
  `target_id` int(11) NOT NULL,
  PRIMARY KEY (`stb_id`,`target_id`),
  KEY `fk_stb_has_target_target1_idx` (`target_id`),
  KEY `fk_stb_has_target_stb1_idx` (`stb_id`),
  CONSTRAINT `fk_stb_has_target_stb1` FOREIGN KEY (`stb_id`) REFERENCES `stb` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_stb_has_target_target1` FOREIGN KEY (`target_id`) REFERENCES `target` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stb_has_target`
--

LOCK TABLES `stb_has_target` WRITE;
/*!40000 ALTER TABLE `stb_has_target` DISABLE KEYS */;
/*!40000 ALTER TABLE `stb_has_target` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `target`
--

DROP TABLE IF EXISTS `target`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `target` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `target`
--

LOCK TABLES `target` WRITE;
/*!40000 ALTER TABLE `target` DISABLE KEYS */;
/*!40000 ALTER TABLE `target` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `usuario` varchar(45) NOT NULL,
  `pswd` varchar(255) NOT NULL,
  `apiToken` varchar(255) DEFAULT NULL,
  `apiTokenTime` datetime DEFAULT NULL,
  `tipoUsr` varchar(45) DEFAULT NULL,
  `estado` tinyint(4) DEFAULT NULL,
  `email` varchar(120) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'','','avilla','$2a$10$wiyKFRg3t8dLX4MJu.sZyOq5wBB/ADN7LFt3PVcut/CFdv6jrigeq',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-03-15 13:21:23
