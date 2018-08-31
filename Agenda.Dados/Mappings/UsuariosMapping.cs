using Agenda.Negocios.DTO;
using FluentNHibernate.Mapping;

namespace Unio.Nucleos.Prestadores.Dados.Mappings
{
    public class UsuariosMapping : ClassMap<Usuario>
    {
        public UsuariosMapping()
        {
            Id(x => x.Id).Column("UsuarioId").GeneratedBy.Identity();
            Map(x => x.Nome).Not.Nullable();
           
        }
    }
}
