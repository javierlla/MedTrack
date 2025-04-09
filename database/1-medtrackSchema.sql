-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema medtrack
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `medtrack` ;

-- -----------------------------------------------------
-- Schema medtrack
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `medtrack` ;
USE `medtrack` ;

-- -----------------------------------------------------
-- Table `medtrack`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `medtrack`.`users` (
  `user_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(85) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `user_id_UNIQUE` (`user_id` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `medtrack`.`patients`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `medtrack`.`patients` (
  `name` VARCHAR(45) NOT NULL,
  `surname` VARCHAR(45) NOT NULL,
  `birthdate` DATE NOT NULL,
  `ssn` VARCHAR(45) NOT NULL,
  `telephone` VARCHAR(45) NOT NULL,
  `user_id` INT UNSIGNED NOT NULL,
  INDEX `fk_patients_users1_idx` (`user_id` ASC) VISIBLE,
  PRIMARY KEY (`user_id`),
  CONSTRAINT `fk_patients_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `medtrack`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `medtrack`.`rooms`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `medtrack`.`rooms` (
  `room_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`room_id`),
  UNIQUE INDEX `room_id_UNIQUE` (`room_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `medtrack`.`doctors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `medtrack`.`doctors` (
  `name` VARCHAR(45) NOT NULL,
  `surname` VARCHAR(45) NOT NULL,
  `speciality` VARCHAR(45) NOT NULL,
  `telephone` VARCHAR(45) NOT NULL,
  `user_id` INT UNSIGNED NOT NULL,
  `room_id` INT UNSIGNED NOT NULL,
  INDEX `fk_doctors_users1_idx` (`user_id` ASC) VISIBLE,
  PRIMARY KEY (`user_id`),
  INDEX `fk_doctors_room1_idx` (`room_id` ASC) VISIBLE,
  CONSTRAINT `fk_doctors_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `medtrack`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_doctors_room1`
    FOREIGN KEY (`room_id`)
    REFERENCES `medtrack`.`rooms` (`room_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `medtrack`.`appointments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `medtrack`.`appointments` (
  `appointment_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `date` DATETIME NOT NULL,
  `patient_id` INT UNSIGNED NOT NULL,
  `doctor_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`appointment_id`),
  UNIQUE INDEX `slot_id_UNIQUE` (`appointment_id` ASC) VISIBLE,
  INDEX `fk_appointment_patients1_idx` (`patient_id` ASC) VISIBLE,
  INDEX `fk_appointment_doctors1_idx` (`doctor_id` ASC) VISIBLE,
  CONSTRAINT `fk_appointment_patients1`
    FOREIGN KEY (`patient_id`)
    REFERENCES `medtrack`.`patients` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_appointment_doctors1`
    FOREIGN KEY (`doctor_id`)
    REFERENCES `medtrack`.`doctors` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `medtrack`.`prescriptions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `medtrack`.`prescriptions` (
  `prescription_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `appointment_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`prescription_id`),
  UNIQUE INDEX `prescription_id_UNIQUE` (`prescription_id` ASC) VISIBLE,
  INDEX `fk_prescriptions_appointment1_idx` (`appointment_id` ASC) VISIBLE,
  CONSTRAINT `fk_prescriptions_appointment1`
    FOREIGN KEY (`appointment_id`)
    REFERENCES `medtrack`.`appointments` (`appointment_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `medtrack`.`medications`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `medtrack`.`medications` (
  `medication_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`medication_id`),
  UNIQUE INDEX `medication_id_UNIQUE` (`medication_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `medtrack`.`medications_prescriptions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `medtrack`.`medications_prescriptions` (
  `medication_id` INT UNSIGNED NOT NULL,
  `prescription_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`medication_id`, `prescription_id`),
  INDEX `fk_medication_has_prescriptions_prescriptions1_idx` (`prescription_id` ASC) VISIBLE,
  INDEX `fk_medication_has_prescriptions_medication1_idx` (`medication_id` ASC) VISIBLE,
  CONSTRAINT `fk_medication_has_prescriptions_medication1`
    FOREIGN KEY (`medication_id`)
    REFERENCES `medtrack`.`medications` (`medication_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_medication_has_prescriptions_prescriptions1`
    FOREIGN KEY (`prescription_id`)
    REFERENCES `medtrack`.`prescriptions` (`prescription_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
