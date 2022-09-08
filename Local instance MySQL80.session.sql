

CREATE TABLE ID_Generator(
    ID_Number INT IDENTITY(1,5),
    PRIMARY KEY (ID_Number)
);






CREATE TABLE Client(
    User_Names VARCHAR(255) NOT NULL, 
    First_Name VARCHAR(30) NOT NULL,
    Last_Name VARCHAR(30) NOT NULL,
    Id_Number INT IDENTITY(1,5) NOT NULL,
    FOREIGN KEY (ID_Number) REFERENCES ID_Generator(ID_Number),
    Passwords VARCHAR(255) NOT NULL,
    Security_Question VARCHAR(255) NOT NULL,
    FOREIGN KEY(Security_Question) REFERENCES Security_Questions(Security_Question),
    Security_Answer VARCHAR(255) NOT NULL,
    Gender CHAR NOT NULL 
    CHECK (Gender IN ('M','F','m','f')),
    Age INT NOT NULL,
    Height INT NOT NULL,
    Weights DECIMAL(5,2) NOT NULL,
    Calorie_Intake_Per_Day INT NOT NULL,
    PRIMARY KEY(Calorie_Intake_Per_Day, Height, Weights)
    );
    
    
    
    CREATE TABLE Goal_Generator(
    Goals INT NOT NULL,
    Height INT NOT NULL,
    Weights DECIMAL(5,2) NOT NULL,
    Calorie_Intake_Per_Day Int NOT NULL,
    Miles_Run INT NOT NULL,
    FOREIGN KEY (Calorie_Intake_Per_Day,Height, Weights) REFERENCES Client (Calorie_Intake_Per_Day,Height, Weights),
    PRIMARY KEY(Goals)
    );
    
    
    
    CREATE TABLE Milestones(
    
    Goals INT NOT NULL,
    FOREIGN KEY (Goals) REFERENCES Goal_Generator (Goals),
    Reward VARCHAR(255) NOT NULL
    );
    
    
    
    CREATE TABLE Intesity(
    Goals INT NOT NULL,
    Intensity_Training_Videos VARCHAR(255) NOT NULL,
    FOREIGN KEY(Goals) REFERENCES Goal_Generator (Goals)
    );