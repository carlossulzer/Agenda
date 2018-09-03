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
                .WithColumn("NomePaciente").AsString(80)
                .WithColumn("DataNascimento").AsDate()
                .WithColumn("Sexo").AsString(01)
                .WithColumn("Telefone").AsString(14);


            Execute.Sql("SET IDENTITY_INSERT Paciente ON");

            Insert.IntoTable("Paciente").Row(new { PacienteId = 1, NomePaciente = "CARLOS SULZER", DataNascimento = "2018-08-30", Sexo = 0, Telefone = "(28)99903-7663" });
            Insert.IntoTable("Paciente").Row(new { PacienteId = 2, NomePaciente = "VALDINEI REIS", DataNascimento = "2018-08-31", Sexo = 0, Telefone = "(27)99923-6058" });
            Insert.IntoTable("Paciente").Row(new { PacienteId = 3, NomePaciente = "MARCOS RAMPINELLI", DataNascimento = "2018-08-28", Sexo = 0, Telefone = "(27)99905-0482" });
            Insert.IntoTable("Paciente").Row(new { PacienteId = 4, NomePaciente = "TARITON NEVES", DataNascimento = "2018-08-27", Sexo = 0, Telefone = "(27)99981-2042" });
            Insert.IntoTable("Paciente").Row(new { PacienteId = 5, NomePaciente = "MAYARA DA SILVA", DataNascimento = "2018-08-26", Sexo = 1, Telefone = "(27)99963-0101" });
            Insert.IntoTable("Paciente").Row(new { PacienteId = 6, NomePaciente = "MARIANA MENEZES", DataNascimento = "2018-08-25", Sexo = 1, Telefone = "(27)99854-8523" });


            Execute.Sql("SET IDENTITY_INSERT Paciente OFF");


        }

        public override void Down()
        {

        }


    }
}
