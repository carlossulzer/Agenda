﻿using Agenda.Negocios.DTO;
using FluentNHibernate.Mapping;

namespace Agenda.Dados.Mappings
{
    public class UsuariosMapping : ClassMap<Usuario>
    {

        public UsuariosMapping()
        {

            Id(x => x.UsuarioId).Column("UsuarioId").GeneratedBy.Identity();
            Map(x => x.Nome).Not.Nullable();
           
        }
    }
}
