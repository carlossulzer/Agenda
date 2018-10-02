using FluentMigrator;
using FluentMigrator.Builders.Execute;
using System;
using System.Collections.Generic;
using System.Text;
namespace Agenda.Migrations.Migrations
{
    [TimestampedMigration(2018, 10, 02, 15, 55)]
    public class AlterarUsuario : Migration
    {


        public override void Up()
        {
            // Atualiza Tabela de Prestadores
            Alter.Table("Usuario")
                .AddColumn("email").AsString(100).WithDefaultValue("")
                .AddColumn("senha").AsString(20).WithDefaultValue("123456");

            Execute.Sql("UPDATE usuario SET email = 'carlos.pego@itixti.com.br' where usuarioId = 1 ");
            Execute.Sql("UPDATE usuario SET email = 'valdineir.reiso@itixti.com.br' where usuarioId = 2 ");
            Execute.Sql("UPDATE usuario SET email = 'maros.rampinelli@itixti.com.br' where usuarioId = 3 ");
            Execute.Sql("UPDATE usuario SET email = 'tariton.neves@itixti.com.br' where usuarioId = 4 ");
            Execute.Sql("UPDATE usuario SET email = 'mayara.merlin@itixti.com.br' where usuarioId = 5 ");
            Execute.Sql("UPDATE usuario SET email = 'mariana.rocha@itixti.com.br' where usuarioId = 6 ");

        }


        public override void Down()
        {
            throw new NotImplementedException();
        }

    }
}
