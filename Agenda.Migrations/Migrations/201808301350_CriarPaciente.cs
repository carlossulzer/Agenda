using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Text;

namespace Agenda.Migrations.Migrations
{
    [TimestampedMigration(2018, 8, 30, 13, 50)]
    public class CriarPaciente : Migration
    {
        public override void Up()
        {
            Create.Table("Paciente")
                .WithColumn("PacienteId").AsInt16().PrimaryKey().Identity().NotNullable()
                .WithColumn("Nome").AsString(80)
                .WithColumn("DataNascimento").AsDate()
                .WithColumn("Sexo").AsString(01);
        }

        public override void Down()
        {

        }


    }
}
