CREATE TABLE `employes`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `surname` VARCHAR(255) NOT NULL,
    `age` BIGINT NOT NULL,
    `departementID` BIGINT NOT NULL,
    `posteID` BIGINT NOT NULL,
    `adress` VARCHAR(255) NOT NULL,
    `phoneNumber` VARCHAR(255) NOT NULL,
    `companyOld` BIGINT NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `gender` VARCHAR(255) NOT NULL,
    `firstDate` DATE NOT NULL,
    `birthPlace` VARCHAR(255) NOT NULL,
    `birthDate` BIGINT NOT NULL,
    `socialSecurity` VARCHAR(255) NOT NULL,
    `haveCompanySecurity` TINYINT NOT NULL
);
ALTER TABLE
    `employes` ADD PRIMARY KEY `employes_id_primary`(`id`);
CREATE TABLE `departements`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `nbPeople` BIGINT NOT NULL,
    `location` VARCHAR(255) NOT NULL,
    `adress` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `departements` ADD PRIMARY KEY `departements_id_primary`(`id`);
CREATE TABLE `postes`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `category` VARCHAR(255) NOT NULL,
    `degrees` VARCHAR(255) NOT NULL,
    `isDangerous` TINYINT NOT NULL
);
ALTER TABLE
    `postes` ADD PRIMARY KEY `postes_id_primary`(`id`);
ALTER TABLE
    `employes` ADD CONSTRAINT `employes_departementid_foreign` FOREIGN KEY(`departementID`) REFERENCES `departements`(`id`);
ALTER TABLE
    `employes` ADD CONSTRAINT `employes_posteid_foreign` FOREIGN KEY(`posteID`) REFERENCES `postes`(`id`);