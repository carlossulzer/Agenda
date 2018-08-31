
using FluentMigrator;
using FluentMigrator.Builders.Execute;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Agenda.Migrations.Migrations
{
    [TimestampedMigration(2018, 8, 27, 15, 08)]
    public class ScriptStart : Migration
    {


        public override void Up()
        {
            Execute.Script(Path.Combine(Environment.CurrentDirectory, @"Scripts\CriacaoDoBanco_Start.sql"));
        }

        public override void Down()
        {

        }

    }
}
