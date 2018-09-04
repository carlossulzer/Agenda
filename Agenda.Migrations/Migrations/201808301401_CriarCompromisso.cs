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
                .WithColumn("CompromissoId").AsInt16().PrimaryKey().Identity().NotNullable()
                .WithColumn("Observacao").AsString(100)
                .WithColumn("DataInicial").AsDate()
                .WithColumn("DataFinal").AsDate()
                .WithColumn("HoraInicial").AsString(5)
                .WithColumn("HoraFinal").AsString(5)
                .WithColumn("PacienteId").AsInt16().NotNullable().ForeignKey("Paciente", "PacienteId")
                .WithColumn("UsuarioId").AsInt16().NotNullable().ForeignKey("Usuario", "UsuarioId");



            Execute.Sql("SET IDENTITY_INSERT Compromisso ON");

           // Insert.IntoTable("Compromisso").Row(new { ComprimissoId = 1,  Observacao = "CONSULTA 01", DataHoraInicial = Convert.ToDateTime( "2018-08-30 07:00:00"), DataHoraFinal = Convert.ToDateTime("2018-08-30 07:30:00"), PacienteId = 1, UsuarioId = 1 });
            Insert.IntoTable("Compromisso").Row(new { CompromissoId = 2,  Observacao = "CONSULTA 02", DataInicial = Convert.ToDateTime("2018-09-03"), DataFinal = Convert.ToDateTime("2018-09-03"), HoraInicial = "08:00", HoraFinal = "08:30", PacienteId = 2, UsuarioId = 2 });
            Insert.IntoTable("Compromisso").Row(new { CompromissoId = 3,  Observacao = "CONSULTA 03", DataInicial = Convert.ToDateTime("2018-09-03"), DataFinal = Convert.ToDateTime("2018-09-03"), HoraInicial = "09:00", HoraFinal = "09:30", PacienteId = 3, UsuarioId = 3 });
            Insert.IntoTable("Compromisso").Row(new { CompromissoId = 4,  Observacao = "CONSULTA 04", DataInicial = Convert.ToDateTime("2018-09-03"), DataFinal = Convert.ToDateTime("2018-09-03"), HoraInicial = "10:00", HoraFinal = "10:30", PacienteId = 4, UsuarioId = 4 });
            Insert.IntoTable("Compromisso").Row(new { CompromissoId = 5,  Observacao = "CONSULTA 05", DataInicial = Convert.ToDateTime("2018-09-03"), DataFinal = Convert.ToDateTime("2018-09-03"), HoraInicial = "11:00", HoraFinal = "11:30", PacienteId = 5, UsuarioId = 1 });
            Insert.IntoTable("Compromisso").Row(new { CompromissoId = 6,  Observacao = "CONSULTA 06", DataInicial = Convert.ToDateTime("2018-09-04"), DataFinal = Convert.ToDateTime("2018-09-04"), HoraInicial = "07:00", HoraFinal = "07:30", PacienteId = 6, UsuarioId = 2 });
            Insert.IntoTable("Compromisso").Row(new { CompromissoId = 7,  Observacao = "CONSULTA 07", DataInicial = Convert.ToDateTime("2018-09-04"), DataFinal = Convert.ToDateTime("2018-09-04"), HoraInicial = "08:00", HoraFinal = "08:30", PacienteId = 1, UsuarioId = 1 });
            Insert.IntoTable("Compromisso").Row(new { CompromissoId = 8,  Observacao = "CONSULTA 08", DataInicial = Convert.ToDateTime("2018-09-04"), DataFinal = Convert.ToDateTime("2018-09-04"), HoraInicial = "09:00", HoraFinal = "09:30", PacienteId = 2, UsuarioId = 1 });
            Insert.IntoTable("Compromisso").Row(new { CompromissoId = 9,  Observacao = "CONSULTA 09", DataInicial = Convert.ToDateTime("2018-09-04"), DataFinal = Convert.ToDateTime("2018-09-04"), HoraInicial = "10:00", HoraFinal = "10:30", PacienteId = 3, UsuarioId = 1 });
            Insert.IntoTable("Compromisso").Row(new { CompromissoId = 10, Observacao = "CONSULTA 10", DataInicial = Convert.ToDateTime("2018-09-04"), DataFinal = Convert.ToDateTime("2018-09-04"), HoraInicial = "11:00", HoraFinal = "11:30", PacienteId = 4, UsuarioId = 1 });
            

            Execute.Sql("SET IDENTITY_INSERT Compromisso OFF");


        }

        public override void Down()
        {

        }
    }
}
