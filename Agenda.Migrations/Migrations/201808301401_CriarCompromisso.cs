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



            Execute.Sql("SET IDENTITY_INSERT Compromisso ON");

           // Insert.IntoTable("Compromisso").Row(new { ComprimissoId = 1,  Observacao = "CONSULTA 01", DataHoraInicial = Convert.ToDateTime( "2018-08-30 07:00:00"), DataHoraFinal = Convert.ToDateTime("2018-08-30 07:30:00"), PacienteId = 1, UsuarioId = 1 });
            Insert.IntoTable("Compromisso").Row(new { ComprimissoId = 2,  Observacao = "CONSULTA 02", DataHoraInicial = Convert.ToDateTime("2018-08-30 08:00:00"), DataHoraFinal = Convert.ToDateTime("2018-08-30 08:30:00"), PacienteId = 2, UsuarioId = 2 });
            Insert.IntoTable("Compromisso").Row(new { ComprimissoId = 3,  Observacao = "CONSULTA 03", DataHoraInicial = Convert.ToDateTime("2018-08-30 09:00:00"), DataHoraFinal = Convert.ToDateTime("2018-08-30 09:30:00"), PacienteId = 3, UsuarioId = 3 });
            Insert.IntoTable("Compromisso").Row(new { ComprimissoId = 4,  Observacao = "CONSULTA 04", DataHoraInicial = Convert.ToDateTime("2018-08-30 10:00:00"), DataHoraFinal = Convert.ToDateTime("2018-08-30 10:30:00"), PacienteId = 4, UsuarioId = 4 });
            Insert.IntoTable("Compromisso").Row(new { ComprimissoId = 5,  Observacao = "CONSULTA 05", DataHoraInicial = Convert.ToDateTime("2018-08-30 11:00:00"), DataHoraFinal = Convert.ToDateTime("2018-08-30 11:30:00"), PacienteId = 5, UsuarioId = 1 });
            Insert.IntoTable("Compromisso").Row(new { ComprimissoId = 6,  Observacao = "CONSULTA 06", DataHoraInicial = Convert.ToDateTime("2018-08-31 07:00:00"), DataHoraFinal = Convert.ToDateTime("2018-08-30 07:30:00"), PacienteId = 6, UsuarioId = 2 });
            Insert.IntoTable("Compromisso").Row(new { ComprimissoId = 7,  Observacao = "CONSULTA 07", DataHoraInicial = Convert.ToDateTime("2018-08-31 08:00:00"), DataHoraFinal = Convert.ToDateTime("2018-08-30 08:30:00"), PacienteId = 1, UsuarioId = 1 });
            Insert.IntoTable("Compromisso").Row(new { ComprimissoId = 8,  Observacao = "CONSULTA 08", DataHoraInicial = Convert.ToDateTime("2018-08-31 09:00:00"), DataHoraFinal = Convert.ToDateTime("2018-08-30 09:30:00"), PacienteId = 2, UsuarioId = 1 });
            Insert.IntoTable("Compromisso").Row(new { ComprimissoId = 9,  Observacao = "CONSULTA 09", DataHoraInicial = Convert.ToDateTime("2018-08-31 10:00:00"), DataHoraFinal = Convert.ToDateTime("2018-08-30 10:30:00"), PacienteId = 3, UsuarioId = 1 });
            Insert.IntoTable("Compromisso").Row(new { ComprimissoId = 10, Observacao = "CONSULTA 10", DataHoraInicial = Convert.ToDateTime("2018-08-31 11:00:00"), DataHoraFinal = Convert.ToDateTime("2018-08-30 11:30:00"), PacienteId = 4, UsuarioId = 1 });
            


            Execute.Sql("SET IDENTITY_INSERT Compromisso OFF");




        }

        public override void Down()
        {

        }
    }
}
