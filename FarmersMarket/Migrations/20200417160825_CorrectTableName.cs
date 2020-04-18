using Microsoft.EntityFrameworkCore.Migrations;

namespace FarmersMarket.Migrations
{
    public partial class CorrectTableName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reqeust_RequestTypes_TypeId",
                table: "Reqeust");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Reqeust",
                table: "Reqeust");

            migrationBuilder.RenameTable(
                name: "Reqeust",
                newName: "Request");

            migrationBuilder.RenameIndex(
                name: "IX_Reqeust_TypeId",
                table: "Request",
                newName: "IX_Request_TypeId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Request",
                table: "Request",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Request_RequestTypes_TypeId",
                table: "Request",
                column: "TypeId",
                principalTable: "RequestTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Request_RequestTypes_TypeId",
                table: "Request");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Request",
                table: "Request");

            migrationBuilder.RenameTable(
                name: "Request",
                newName: "Reqeust");

            migrationBuilder.RenameIndex(
                name: "IX_Request_TypeId",
                table: "Reqeust",
                newName: "IX_Reqeust_TypeId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Reqeust",
                table: "Reqeust",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Reqeust_RequestTypes_TypeId",
                table: "Reqeust",
                column: "TypeId",
                principalTable: "RequestTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
