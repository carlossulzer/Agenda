using Agenda.Negocios.DTO;
using FluentNHibernate.Mapping;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Agenda.API.Mappings
{
    public class CompromissosMapping : ClassMap<Compromisso>
    {

        public CompromissosMapping()
        {
            Id(x => x.CompromissoId).Column("CompromissoId").GeneratedBy.Identity();
            Map(x => x.Observacao).Not.Nullable();
            Map(x => x.DataHoraInicial).Not.Nullable();
            Map(x => x.DataHoraFinal).Not.Nullable();
            Map(x => x.PacienteId).Not.Nullable();
            Map(x => x.UsuarioId).Not.Nullable();
        }

    }
}
