using FluentMigrator;
using FluentMigrator.Builders.Execute;
using System;
using System.Collections.Generic;
using System.Text;

namespace Agenda.Migrations.Migrations
{
    [TimestampedMigration(2018, 8, 28, 17, 25)]
    public class CriarUsuario : Migration
    {
        public override void Up()
        {
            Create.Table("Usuario")
                .WithColumn("UsuarioId").AsInt16().PrimaryKey().Identity().NotNullable()
                .WithColumn("Nome").AsString(50);


            Execute.Sql("SET IDENTITY_INSERT Usuario ON");

            Insert.IntoTable("Usuario").Row(new { UsuarioId = 1, Nome = "CARLOS SULZER" });
            Insert.IntoTable("Usuario").Row(new { UsuarioId = 2, Nome = "VALDINEI REIS" });
            Insert.IntoTable("Usuario").Row(new { UsuarioId = 3, Nome = "MARCOS RAMPINELLI" });
            Insert.IntoTable("Usuario").Row(new { UsuarioId = 4, Nome = "TARITON NEVES" });

            Execute.Sql("SET IDENTITY_INSERT Usuario OFF");

        }

        public override void Down()
        {

        }

    }
}
