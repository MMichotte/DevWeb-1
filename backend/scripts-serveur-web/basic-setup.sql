
-- fonction getPath --
create function "DBA"."getPath"()
returns long varchar
deterministic
begin
  declare dbPath long varchar; -- chemin de la db
  declare dbName long varchar; -- nom de la db

  set dbPath = (select db_property ('file'));   
  set dbName = (select db_property('name')) + '.db';
  set dbPath = left(db_path,locate(db_path,'\backend',-1)) + 'frontend\';

  return dbPath;
end;

-- procédure getPage --
create procedure "DBA"."http_getPage"(in url char(255))
begin
  call sa_set_http_header('Content-Type', 'text/html; charset=utf-8');
  call sa_set_http_header('Access-Control-Allow-Origin', '*'); 
  select xp_read_file(dba.getPath() || url || '.html'); 
end;

-- procédure getJS -- 
create procedure "DBA"."http_getJS"(in url char(255))
begin
  call sa_set_http_header('Content-Type', 'application/javascript');
  call sa_set_http_header('Access-Control-Allow-Origin', '*');
	select xp_read_file(dba.getPath() || 'js\' || url);
end;


-- procédure getCSS -- 
create procedure "DBA"."http_getCSS"(in url char(255))
begin
  call sa_set_http_header('Content-Type', 'text/css');
  call sa_set_http_header('Access-Control-Allow-Origin', '*');
	select xp_read_file(dba.getPath() || 'css\' || url);
END;


-- procédure getIMG -- 
create procedure "DBA"."http_getIMG"(in url char(255))
begin
  call sa_set_http_header('Content-Type', 'image/png');
  call sa_set_http_header('Access-Control-Allow-Origin', '*');
	select xp_read_file(dba.getPath() || 'img\' || url);
end;


-- Web-services -- 

CREATE SERVICE "js" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call dba.http_getJS(:url);

CREATE SERVICE "css" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call dba.http_getCSS(:url);

CREATE SERVICE "img" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call dba.http_getIMG(:url);

CREATE SERVICE "root" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call dba.http_getPage(:url);