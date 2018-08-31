using AgendaAPI.Entidades;
using Agenda.API.Infra;
using Microsoft.AspNetCore.Mvc;
using NHibernate;
using System.Collections.Generic;

namespace Agenda.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {

        [HttpGet("todos")]
        public JsonResult GetAll()

        {
            using (ISession session = NHibernateHelper.AbreSession())
            {
                string hql = "from Usuario";
                IQuery query = session.CreateQuery(hql);
                IList<Paciente> lstUsuarios = query.List<Paciente>();
                return new JsonResult(lstUsuarios);
            }
        }

    }
}
