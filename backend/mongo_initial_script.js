db = db.getSiblingDB('admin');
db.createUser({ user: "reactBack", pwd: "senha123", roles: [
    { role:"readWrite", db: "mymoney" }
    , { role: "dbAdmin" , db: "mymoney" }
    , { role:"readWrite", db: "admin" }
    , { role: "dbAdmin" , db: "admin" }
] });
