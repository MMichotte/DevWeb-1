CREATE TABLE `langues` (
    `languesId` varchar(2) NOT NULL ,
    `nom` varchar(30)  NOT NULL, 
     PRIMARY KEY (`languesId`)
);

CREATE TABLE `mots` (
    `languesId` varchar(2)  NOT NULL ,
    `mot` varchar(50)  NOT NULL ,
    PRIMARY KEY (`languesId`, `mot`),
    CONSTRAINT `fk_mots_languesId` FOREIGN KEY(`languesId`) REFERENCES `langues` (`languesId`)
);


CREATE TABLE `utilisateurs` (
    `userId` int DEFAULT AUTOINCREMENT NOT NULL ,
    `nom` varchar(50)  NOT NULL ,
    `prenom` varchar(50)  NOT NULL ,
    `pseudo` varchar(50) UNIQUE  NOT NULL ,
    `mdp` varchar(100)  NOT NULL ,
    PRIMARY KEY (`userId`)
);

CREATE TABLE `classement` (
    `userId` int  NOT NULL ,
    `score` int  NOT NULL ,
    PRIMARY KEY (`userId`),
    CONSTRAINT `fk_classement_userId` FOREIGN KEY(`userId`) REFERENCES `utilisateurs` (`userId`)
);