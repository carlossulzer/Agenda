using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Agenda.Negocios.DTO
{
    public class Paciente
    {
        [Required]
        [System.ComponentModel.DataAnnotations.Display(Name = "Código do Paciente")]
        public virtual int PacienteId { get; set; }

        [Required]
        [System.ComponentModel.DataAnnotations.Display(Name = "Nome do Paciente")]
        public virtual string NomePaciente { get; set; }

        [Required]
        [System.ComponentModel.DataAnnotations.Display(Name = "Data de Nascimento")]
        public virtual DateTime DataNascimento { get; set; }

        [Required]
        [System.ComponentModel.DataAnnotations.Display(Name = "Sexo")]
        public virtual int Sexo { get; set; }


        [Required]
        [System.ComponentModel.DataAnnotations.Display(Name = "Telefone")]
        public virtual string Telefone { get; set; }

    }
}
