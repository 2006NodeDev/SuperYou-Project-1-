set schema 'superyoudb';

--Creating table for roles and users 
create table roles(
	"roleid" serial primary key,
	"role" text
);
create table users(
	"userid" serial primary key,
	"username" text not null unique,
	"password" text not null,
	"firstname" text not null,
	"lastname" text not null,
	"email" text not null,
	"role" int references roles("roleid") --foriegn key to roles

);

--Inserting data into roles and user/only admin accounts 
insert into roles("role") values('Human');
insert into roles("role") values('Super');
insert into roles("role") values('Admin');

insert into users("username","password","firstname","lastname","email","role")
values('moxeyc','password1','China','Moxey','moxeychina@mailing.com',3);

insert into users("username","password","firstname","lastname","email","role")
values('abatson','password2','Alec','Batson','abatson@mailing.com',3);

--Selecting from roles
select * from roles;
--Selecting from users
select * from users;
