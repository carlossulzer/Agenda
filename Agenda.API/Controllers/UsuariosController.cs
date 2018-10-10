using Agenda.API.Infra;
using Agenda.Negocios.DTO;
using Microsoft.AspNetCore.Mvc;
using NHibernate;
using System.Collections;
using System.Linq;

namespace Agenda.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {

        [HttpGet("GetAll")]
        public JsonResult GetAll()
        {
            using (ISession session = NHibernateHelper.OpenSession())
            {
                var lstUsuarios = session.Query<Usuario>().ToList();
                return new JsonResult(lstUsuarios);
            }

        }


        [HttpGet("GetId/{id}")]
        public JsonResult GetId(int id )
        {
            using (ISession session = NHibernateHelper.OpenSession())
            {
                return new JsonResult(session.Get<Usuario>(id));
            }
        }


        [HttpPost("SaveUpdate")]
        public void Salvar(Usuario usuario)
        {

            using (ISession session = NHibernateHelper.OpenSession())
            {
                using (var transaction = session.BeginTransaction())
                {
                    session.SaveOrUpdate(usuario);
                    transaction.Commit();
                }

            }

        }


        [HttpDelete("Delete")]
        public void Excluir(Usuario usuario)
        {
            using (ISession session = NHibernateHelper.OpenSession())
            {
                using (var transaction = session.BeginTransaction())
                {
                    session.Delete(usuario);
                    transaction.Commit();
                }
            }
        }

    }
}
