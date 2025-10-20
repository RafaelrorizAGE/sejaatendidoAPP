flowchart TD
  Usuario -->|1:1| Medico
  Usuario -->|1:1| Paciente
  Medico -->|1:N| Consulta
  Paciente -->|1:N| Consulta
  Consulta -->|1:1| Pagamento
