module.exports = function (sequelize, DataTypes) {
    const product = sequelize.define("Product", {
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
        },
        seller: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(300),
            allowNull: false,
        },
        imageUrl: {
            type: DataTypes.STRING(300),
            allowNull: true,
        },
    });
    return product;
};
// table 컬럼을 만드는 과정
//  allowNull , 데이터가 들어올때 해당 컬럼에 값이 있을지(false), 없어도 될지(true) 설정

