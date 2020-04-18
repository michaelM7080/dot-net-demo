using Microsoft.EntityFrameworkCore.Migrations;

namespace FarmersMarket.Migrations
{
    public partial class SeedingRequestTypes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "RequestTypes",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[] { 1, "Search by Zip Code", "ByZip" });

            migrationBuilder.InsertData(
                table: "RequestTypes",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[] { 2, "Search using Lat and Lon", "ByLocation" });

            migrationBuilder.InsertData(
                table: "RequestTypes",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[] { 3, "Pulling details on a location.", "GetDetail" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "RequestTypes",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "RequestTypes",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "RequestTypes",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}
