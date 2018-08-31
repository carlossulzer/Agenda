using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Agenda.Negocios.DTO
{
    public class Compromisso
    {

        [Required]
        [System.ComponentModel.DataAnnotations.Display(Name = "Código do Compromisso")]
        public int CompromissoId { get; set; }

        [Required]
        [System.ComponentModel.DataAnnotations.Display(Name = "Observação")]
        public string Observacao { get; set; }

        [Required]
        [System.ComponentModel.DataAnnotations.Display(Name = "Data e Hora Inicial")]
        public DateTime DataHoraInicial { get; set; }

        [Required]
        [System.ComponentModel.DataAnnotations.Display(Name = "Data e Hora Final")]
        public DateTime DataHoraFinal { get; set; }

        [Required]
        [System.ComponentModel.DataAnnotations.Display(Name = "Código do Paciente")]
        public int PacienteId { get; set; }

        [Required]
        [System.ComponentModel.DataAnnotations.Display(Name = "Código do Usuário")]
        public int UsuarioId { get; set; }



    }
}
