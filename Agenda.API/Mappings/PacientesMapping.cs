using Agenda.Negocios.DTO;
using FluentNHibernate.Mapping;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Agenda.API.Mappings
{
    public class PacientesMapping : ClassMap<Paciente>
    {
        public PacientesMapping()
        {
            Id(x => x.PacienteId).Column("PacienteId").GeneratedBy.Identity();
                                                      //.UnsavedValue(0)
                                                      //.Access.CamelCaseField(Prefix.Underscore);
            Map(x => x.NomePaciente).Not.Nullable();
            Map(x => x.DataNascimento).Not.Nullable();
            Map(x => x.Sexo).Not.Nullable();
            Map(x => x.Telefone).Not.Nullable();
        }
    }
}
