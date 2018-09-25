using Agenda.API.Infra;
using Agenda.Negocios.DTO;
using Microsoft.AspNetCore.Mvc;
using NHibernate;
using System.Collections.Generic;
using System.Linq;

namespace Agenda.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PacientesController : ControllerBase
    {

        [HttpGet("todos")]
        public JsonResult GetAll()

        {
            using (ISession session = NHibernateHelper.OpenSession())
            {
                var lstPacientes = session.Query<Paciente>().ToList();
                return new JsonResult(lstPacientes);

            }
        }


        [HttpGet("grid")]
        public JsonResult GetGrid()

        {
            using (ISession session = NHibernateHelper.OpenSession())
            {

                var lstPacientes = session.Query<Paciente>().ToList()
                                      .Select(x => new { x.PacienteId, x.NomePaciente , x.Telefone });

                return new JsonResult(lstPacientes);
            }
        }

    }
}
