using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FarmersMarket.Migrations
{
    public partial class InitDbSetup : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Markets",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MarketNumber = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    IsFavorite = table.Column<bool>(nullable: false),
                    Address = table.Column<string>(nullable: true),
                    GoogleAddress = table.Column<string>(nullable: true),
                    Products = table.Column<string>(nullable: true),
                    Schedule = table.Column<string>(nullable: true),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    UpdatedDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Markets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RequestTypes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RequestTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Reqeust",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RequestZip = table.Column<string>(nullable: true),
                    RequestLat = table.Column<string>(nullable: true),
                    RequestLon = table.Column<string>(nullable: true),
                    RequestMarketId = table.Column<string>(nullable: true),
                    Response = table.Column<string>(nullable: true),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    RequestType = table.Column<int>(nullable: false),
                    TypeId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reqeust", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Reqeust_RequestTypes_TypeId",
                        column: x => x.TypeId,
                        principalTable: "RequestTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Reqeust_TypeId",
                table: "Reqeust",
                column: "TypeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Markets");

            migrationBuilder.DropTable(
                name: "Reqeust");

            migrationBuilder.DropTable(
                name: "RequestTypes");
        }
    }
}
