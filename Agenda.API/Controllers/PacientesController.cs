using Agenda.API.Infra;
using Agenda.Negocios.DTO;
using Microsoft.AspNetCore.Mvc;
using NHibernate;
using System.Collections.Generic;

namespace Agenda.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PacientesController : ControllerBase
    {

        [HttpGet("todos")]
        public JsonResult GetAll()

        {
            using (ISession session = NHibernateHelper.AbreSession())
            {
                string hql = "from Paciente";
                IQuery query = session.CreateQuery(hql);
                IList<Paciente> lstPacientes = query.List<Paciente>();
                return new JsonResult(lstPacientes);
            }
        }

    }
}
