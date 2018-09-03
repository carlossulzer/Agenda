using Agenda.API.Infra;
using Agenda.Negocios.DTO;
using Microsoft.AspNetCore.Mvc;
using NHibernate;
using System.Linq;

namespace Agenda.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {

        [HttpGet("todos")]
        public JsonResult GetAll()

        {
            using (ISession session = NHibernateHelper.OpenSession())
            {
                var lstUsuarios = session.Query<Usuario>().ToList();
                return new JsonResult(lstUsuarios);

                //string hql = "from Usuario";
                //IQuery query = session.CreateQuery(hql);
                //IList<Usuario> lstUsuarios = query.List<Usuario>();
                //return new JsonResult(lstUsuarios);
            }

        }

    }
}
