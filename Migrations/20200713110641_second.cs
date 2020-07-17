using Microsoft.EntityFrameworkCore.Migrations;

namespace myproject.Migrations
{
    public partial class second : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_UserData",
                table: "UserData");

            migrationBuilder.RenameTable(
                name: "UserData",
                newName: "Userdata");

            migrationBuilder.AddColumn<string>(
                name: "email",
                table: "Userdata",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "phonenumber",
                table: "Userdata",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Userdata",
                table: "Userdata",
                column: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Userdata",
                table: "Userdata");

            migrationBuilder.DropColumn(
                name: "email",
                table: "Userdata");

            migrationBuilder.DropColumn(
                name: "phonenumber",
                table: "Userdata");

            migrationBuilder.RenameTable(
                name: "Userdata",
                newName: "UserData");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserData",
                table: "UserData",
                column: "Id");
        }
    }
}
