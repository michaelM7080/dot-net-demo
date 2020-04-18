using Microsoft.EntityFrameworkCore.Migrations;

namespace FarmersMarket.Migrations
{
    public partial class ChangeColumnTypeInMarketTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "MarketNumber",
                table: "Markets",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "MarketNumber",
                table: "Markets",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
