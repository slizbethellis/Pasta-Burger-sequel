module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        customer_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    // Associates customer with chosen burgers
    Customer.associate = function(models) {
        Customer.belongsTo(models.Burger);
    };

    return Customer;
};