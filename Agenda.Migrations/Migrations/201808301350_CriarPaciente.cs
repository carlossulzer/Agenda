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


            Execute.Sql("SET IDENTITY_INSERT Paciente ON");

            Insert.IntoTable("Paciente").Row(new { PacienteId = 1, Nome = "CARLOS SULZER", DataNascimento = "2018-08-30", Sexo = 0 });
            Insert.IntoTable("Paciente").Row(new { PacienteId = 2, Nome = "VALDINEI REIS", DataNascimento = "2018-08-31", Sexo = 0 });
            Insert.IntoTable("Paciente").Row(new { PacienteId = 3, Nome = "MARCOS RAMPINELLI", DataNascimento = "2018-08-28", Sexo = 0 });
            Insert.IntoTable("Paciente").Row(new { PacienteId = 4, Nome = "TARITON NEVES", DataNascimento = "2018-08-27", Sexo = 0 });
            Insert.IntoTable("Paciente").Row(new { PacienteId = 5, Nome = "MAYARA DA SILVA", DataNascimento = "2018-08-26", Sexo = 1 });
            Insert.IntoTable("Paciente").Row(new { PacienteId = 6, Nome = "MARIANA MENEZES", DataNascimento = "2018-08-25", Sexo = 1 });


            Execute.Sql("SET IDENTITY_INSERT Paciente OFF");











        }

        public override void Down()
        {

        }


    }
}
