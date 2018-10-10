using Agenda.Negocios.DTO;
using FluentNHibernate.Mapping;

namespace Agenda.API.Mappings
{
    public class UsuariosMapping : ClassMap<Usuario>
    {
        public UsuariosMapping()
        {
            Id(x => x.UsuarioId).Column("UsuarioId").GeneratedBy.Identity();
                                                    //.UnsavedValue(0)
                                                    //.Access.CamelCaseField(Prefix.Underscore);
            Map(x => x.Nome).Not.Nullable();
            Map(x => x.Email).Not.Nullable();
            Map(x => x.Senha).Not.Nullable();


        }
    }
}
