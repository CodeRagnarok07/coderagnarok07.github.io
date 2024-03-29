### creación de tabla

cdm: 

`sqlite3 namedb`   creación de la base de datos

`.database`   se crea la base de datos

`create table name(namecapo1 tipo(cantidad)` ⇒ crea una tabla

`create table Login(email varchar(30), name varchar(30), password varchar(30));` 

`drop table usuarios;`

Dbrowser

Ejecuta el codigo directamente en Execute SQL

`CREATE TABLE log (sistema varchar(25), descriptcion varchar(100), fecharerror datetime);`

### Instalación

1. descargar
    1. [https://www.sqlite.org/index.html](https://www.sqlite.org/index.html)
    2. buscar 
        
        [sqlite-tools-win32-x86-3370000.zip](https://www.sqlite.org/2021/sqlite-tools-win32-x86-3370000.zip)
        
2. agregarlo al path
    1. copiar la carpeta en C: / crs/

### Db browse

[https://sqlitebrowser.org/dl/](https://sqlitebrowser.org/dl/)

[DB Browser for SQLite - Standard installer for 64-bit Windows](https://download.sqlitebrowser.org/DB.Browser.for.SQLite-3.12.2-win64.msi)

- SQLITE3 Linux
    
    
    ```jsx
    .archive ...           Manage SQL archives: ".archive --help" for details
    .auth ON|OFF           Show authorizer callbacks
    .backup ?DB? FILE      Backup DB (default "main") to FILE
    .bail on|off           Stop after hitting an error.  Default OFF
    .binary on|off         Turn binary output on or off.  Default OFF
    .cd DIRECTORY          Change the working directory to DIRECTORY
    .changes on|off        Show number of rows changed by SQL
    .check GLOB            Fail if output since .testcase does not match
    .clone NEWDB           Clone data into NEWDB from the existing database
    .databases             List names and files of attached databases
    .dbinfo ?DB?           Show status information about the database
    .dump ?TABLE? ...      Dump the database in an SQL text format
                             If TABLE specified, only dump tables matching
                             LIKE pattern TABLE.
    .echo on|off           Turn command echo on or off
    .eqp on|off|full       Enable or disable automatic EXPLAIN QUERY PLAN
    .excel                 Display the output of next command in a spreadsheet
    .exit                  Exit this program
    .expert                EXPERIMENTAL. Suggest indexes for specified queries
    .fullschema ?--indent? Show schema and the content of sqlite_stat tables
    .headers on|off        Turn display of headers on or off
    .help                  Show this message
    .import FILE TABLE     Import data from FILE into TABLE
    .imposter INDEX TABLE  Create imposter table TABLE on index INDEX
    .indexes ?TABLE?       Show names of all indexes
                             If TABLE specified, only show indexes for tables
                             matching LIKE pattern TABLE.
    .limit ?LIMIT? ?VAL?   Display or change the value of an SQLITE_LIMIT
    .lint OPTIONS          Report potential schema issues. Options:
                             fkey-indexes     Find missing foreign key indexes
    .load FILE ?ENTRY?     Load an extension library
    .log FILE|off          Turn logging on or off.  FILE can be stderr/stdout
    .mode MODE ?TABLE?     Set output mode where MODE is one of:
                             ascii    Columns/rows delimited by 0x1F and 0x1E
                             csv      Comma-separated values
                             column   Left-aligned columns.  (See .width)
                             html     HTML <table> code
                             insert   SQL insert statements for TABLE
                             line     One value per line
                             list     Values delimited by "|"
                             quote    Escape answers as for SQL
                             tabs     Tab-separated values
                             tcl      TCL list elements
    .nullvalue STRING      Use STRING in place of NULL values
    .once (-e|-x|FILE)     Output for the next SQL command only to FILE
                             or invoke system text editor (-e) or spreadsheet (-x)
                             on the output.
    .open ?OPTIONS? ?FILE? Close existing database and reopen FILE
                             The --new option starts with an empty file
    .output ?FILE?         Send output to FILE or stdout
    .print STRING...       Print literal STRING
    .prompt MAIN CONTINUE  Replace the standard prompts
    .quit                  Exit this program
    .read FILENAME         Execute SQL in FILENAME
    .restore ?DB? FILE     Restore content of DB (default "main") from FILE
    .save FILE             Write in-memory database into FILE
    .scanstats on|off      Turn sqlite3_stmt_scanstatus() metrics on or off
    .schema ?PATTERN?      Show the CREATE statements matching PATTERN
                              Add --indent for pretty-printing
    .selftest ?--init?     Run tests defined in the SELFTEST table
    .separator COL ?ROW?   Change the column separator and optionally the row
                             separator for both the output mode and .import
    .session CMD ...       Create or control sessions
    .sha3sum ?OPTIONS...?  Compute a SHA3 hash of database content
    .shell CMD ARGS...     Run CMD ARGS... in a system shell
    .show                  Show the current values for various settings
    .stats ?on|off?        Show stats or turn stats on or off
    .system CMD ARGS...    Run CMD ARGS... in a system shell
    .tables ?TABLE?        List names of tables
                             If TABLE specified, only list tables matching
                             LIKE pattern TABLE.
    .testcase NAME         Begin redirecting output to 'testcase-out.txt'
    .timeout MS            Try opening locked tables for MS milliseconds
    .timer on|off          Turn SQL timer on or off
    .trace FILE|off        Output each SQL statement as it is run
    .vfsinfo ?AUX?         Information about the top-level VFS
    .vfslist               List all available VFSes
    .vfsname ?AUX?         Print the name of the VFS stack
    .width NUM1 NUM2 ...   Set column widths for "column" mode
                             Negative values right-justify
    ```
    

s