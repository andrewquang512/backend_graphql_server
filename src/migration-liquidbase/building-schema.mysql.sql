-- liquibase formatted sql

-- changeset dhalder:1668653647146-1
CREATE TABLE building_building (id VARCHAR(36) NOT NULL, profile_id VARCHAR(36) NOT NULL, type VARCHAR(50) NOT NULL, level TINYINT(3) UNSIGNED NOT NULL, state VARCHAR(255) NOT NULL, time_remaining INT UNSIGNED DEFAULT 0 NULL, produced_coin INT UNSIGNED DEFAULT 0 NULL, last_time_updated timestamp DEFAULT NOW() NULL, modified_at timestamp DEFAULT NOW() NULL, created_at timestamp DEFAULT NOW() NULL, modified_by VARCHAR(255) NULL, created_by VARCHAR(255) NULL, deleted_at timestamp NULL, extra_data MEDIUMTEXT NULL, recruit_refresh_remaining INT NULL, skip_cost INT DEFAULT 0 NULL, collected_coin INT DEFAULT 0 NULL, coin_cap INT DEFAULT 0 NULL, trading_slot INT DEFAULT 0 NULL, CONSTRAINT PK_BUILDING_BUILDING PRIMARY KEY (id));

-- changeset dhalder:1668653647146-2
CREATE TABLE building_monument (id VARCHAR(36) NOT NULL, profile_id VARCHAR(36) NOT NULL, name VARCHAR(50) NOT NULL, state VARCHAR(255) NOT NULL, modified_at timestamp DEFAULT NOW() NULL, created_at timestamp DEFAULT NOW() NULL, modified_by VARCHAR(255) NULL, created_by VARCHAR(255) NULL, deleted_at timestamp NULL, CONSTRAINT PK_BUILDING_MONUMENT PRIMARY KEY (id));

-- changeset dhalder:1668653647146-3
CREATE TABLE building_monument_group (id VARCHAR(36) NOT NULL, name VARCHAR(50) NOT NULL, modified_at timestamp DEFAULT NOW() NULL, created_at timestamp DEFAULT NOW() NULL, modified_by VARCHAR(255) NULL, created_by VARCHAR(255) NULL, deleted_at timestamp NULL, CONSTRAINT PK_BUILDING_MONUMENT_GROUP PRIMARY KEY (id), UNIQUE (name));

-- changeset dhalder:1668653647146-4
CREATE TABLE building_monument_parameter (id VARCHAR(36) NOT NULL, name VARCHAR(50) NOT NULL, type VARCHAR(50) NOT NULL, modified_at timestamp DEFAULT NOW() NULL, created_at timestamp DEFAULT NOW() NULL, modified_by VARCHAR(255) NULL, created_by VARCHAR(255) NULL, deleted_at timestamp NULL, CONSTRAINT PK_BUILDING_MONUMENT_PARAMETER PRIMARY KEY (id));

-- changeset dhalder:1668653647146-5
CREATE TABLE building_monument_setting (id VARCHAR(36) NOT NULL, monument_type_name VARCHAR(50) NOT NULL, monument_parameter_name VARCHAR(50) NOT NULL, value FLOAT(10, 1) UNSIGNED DEFAULT 0 NULL, modified_at timestamp DEFAULT NOW() NULL, created_at timestamp DEFAULT NOW() NULL, modified_by VARCHAR(255) NULL, created_by VARCHAR(255) NULL, deleted_at timestamp NULL, CONSTRAINT PK_BUILDING_MONUMENT_SETTING PRIMARY KEY (id));

-- changeset dhalder:1668653647146-6
CREATE TABLE building_monument_type (id VARCHAR(36) NOT NULL, name VARCHAR(50) NOT NULL, monument_group_name VARCHAR(50) NOT NULL, modified_at timestamp DEFAULT NOW() NULL, created_at timestamp DEFAULT NOW() NULL, modified_by VARCHAR(255) NULL, created_by VARCHAR(255) NULL, deleted_at timestamp NULL, CONSTRAINT PK_BUILDING_MONUMENT_TYPE PRIMARY KEY (id));

-- changeset dhalder:1668653647146-7
CREATE TABLE building_parameter (id VARCHAR(36) NOT NULL, type VARCHAR(50) NOT NULL, param_name VARCHAR(150) NOT NULL, `description` TEXT NULL, modified_at timestamp DEFAULT NOW() NULL, created_at timestamp DEFAULT NOW() NULL, modified_by VARCHAR(255) NULL, created_by VARCHAR(255) NULL, deleted_at timestamp NULL, CONSTRAINT PK_BUILDING_PARAMETER PRIMARY KEY (id));

-- changeset dhalder:1668653647146-8
CREATE TABLE building_setting (id VARCHAR(36) NOT NULL, type VARCHAR(50) NOT NULL, param_name VARCHAR(150) NOT NULL, level TINYINT(3) UNSIGNED NOT NULL, value FLOAT(10, 1) UNSIGNED DEFAULT 0 NULL, modified_at timestamp DEFAULT NOW() NULL, created_at timestamp DEFAULT NOW() NULL, modified_by VARCHAR(255) NULL, created_by VARCHAR(255) NULL, deleted_at timestamp NULL, CONSTRAINT PK_BUILDING_SETTING PRIMARY KEY (id));

-- changeset dhalder:1668653647146-9
CREATE TABLE building_type (id VARCHAR(36) NOT NULL, type VARCHAR(50) NOT NULL, modified_at timestamp DEFAULT NOW() NULL, created_at timestamp DEFAULT NOW() NULL, modified_by VARCHAR(255) NULL, created_by VARCHAR(255) NULL, deleted_at timestamp NULL, CONSTRAINT PK_BUILDING_TYPE PRIMARY KEY (id), UNIQUE (type));

-- changeset dhalder:1668653647146-10
CREATE TABLE migration (service VARCHAR(100) NOT NULL, version INT NOT NULL, filename VARCHAR(100) NOT NULL, executed_at timestamp DEFAULT NOW() NULL, CONSTRAINT PK_MIGRATION PRIMARY KEY (service, version));

-- changeset dhalder:1668653647146-11
ALTER TABLE building_monument_parameter ADD CONSTRAINT UC_BUILDING UNIQUE (name, type);

-- changeset dhalder:1668653647146-12
ALTER TABLE building_monument_setting ADD CONSTRAINT UC_BUILDING UNIQUE (monument_type_name, monument_parameter_name);

-- changeset dhalder:1668653647146-13
ALTER TABLE building_monument_type ADD CONSTRAINT UC_BUILDING UNIQUE (monument_group_name, name);

-- changeset dhalder:1668653647146-14
ALTER TABLE building_parameter ADD CONSTRAINT UC_BUILDING_SETTING UNIQUE (type, param_name);

-- changeset dhalder:1668653647146-15
ALTER TABLE building_setting ADD CONSTRAINT UC_BUILDING_SETTING UNIQUE (type, param_name, level);

