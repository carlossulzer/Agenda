using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Text;

namespace Agenda.Migrations.Migrations
{
    [TimestampedMigration(2018, 8, 30, 14, 01)]
    public class CriarCompromisso : Migration
    {
        public override void Up()
        {
            Create.Table("Compromisso")
                .WithColumn("ComprimissoId").AsInt16().PrimaryKey().Identity().NotNullable()
                .WithColumn("Observacao").AsString(100)
                .WithColumn("DataHoraInicial").AsDateTime()
                .WithColumn("DataHoraFinal").AsDateTime()
                .WithColumn("PacienteId").AsInt16().NotNullable().ForeignKey("Paciente", "PacienteId")
                .WithColumn("UsuarioId").AsInt16().NotNullable().ForeignKey("Usuario", "UsuarioId");

        }

        public override void Down()
        {

        }
    }
}
