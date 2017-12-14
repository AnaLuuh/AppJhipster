package testepacote.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Aula.
 */
@Entity
@Table(name = "aula")
public class Aula implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "descricao")
    private String descricao;

    @Column(name = "horario")
    private String horario;

    @ManyToOne
    private Turma turma;

    @OneToMany(mappedBy = "aula")
    @JsonIgnore
    private Set<Falta> faltas = new HashSet<>();

    @OneToMany(mappedBy = "aula")
    @JsonIgnore
    private Set<Turma> turmas = new HashSet<>();

    @OneToMany(mappedBy = "aula")
    @JsonIgnore
    private Set<PeriodoLetivo> periodos = new HashSet<>();

    @ManyToOne
    private PeriodoLetivo periodoLetivo;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public Aula descricao(String descricao) {
        this.descricao = descricao;
        return this;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getHorario() {
        return horario;
    }

    public Aula horario(String horario) {
        this.horario = horario;
        return this;
    }

    public void setHorario(String horario) {
        this.horario = horario;
    }

    public Turma getTurma() {
        return turma;
    }

    public Aula turma(Turma turma) {
        this.turma = turma;
        return this;
    }

    public void setTurma(Turma turma) {
        this.turma = turma;
    }

    public Set<Falta> getFaltas() {
        return faltas;
    }

    public Aula faltas(Set<Falta> faltas) {
        this.faltas = faltas;
        return this;
    }

    public Aula addFalta(Falta falta) {
        this.faltas.add(falta);
        falta.setAula(this);
        return this;
    }

    public Aula removeFalta(Falta falta) {
        this.faltas.remove(falta);
        falta.setAula(null);
        return this;
    }

    public void setFaltas(Set<Falta> faltas) {
        this.faltas = faltas;
    }

    public Set<Turma> getTurmas() {
        return turmas;
    }

    public Aula turmas(Set<Turma> turmas) {
        this.turmas = turmas;
        return this;
    }

    public Aula addTurma(Turma turma) {
        this.turmas.add(turma);
        turma.setAula(this);
        return this;
    }

    public Aula removeTurma(Turma turma) {
        this.turmas.remove(turma);
        turma.setAula(null);
        return this;
    }

    public void setTurmas(Set<Turma> turmas) {
        this.turmas = turmas;
    }

    public Set<PeriodoLetivo> getPeriodos() {
        return periodos;
    }

    public Aula periodos(Set<PeriodoLetivo> periodoLetivos) {
        this.periodos = periodoLetivos;
        return this;
    }

    public Aula addPeriodo(PeriodoLetivo periodoLetivo) {
        this.periodos.add(periodoLetivo);
        periodoLetivo.setAula(this);
        return this;
    }

    public Aula removePeriodo(PeriodoLetivo periodoLetivo) {
        this.periodos.remove(periodoLetivo);
        periodoLetivo.setAula(null);
        return this;
    }

    public void setPeriodos(Set<PeriodoLetivo> periodoLetivos) {
        this.periodos = periodoLetivos;
    }

    public PeriodoLetivo getPeriodoLetivo() {
        return periodoLetivo;
    }

    public Aula periodoLetivo(PeriodoLetivo periodoLetivo) {
        this.periodoLetivo = periodoLetivo;
        return this;
    }

    public void setPeriodoLetivo(PeriodoLetivo periodoLetivo) {
        this.periodoLetivo = periodoLetivo;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Aula aula = (Aula) o;
        if (aula.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), aula.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Aula{" +
            "id=" + getId() +
            ", descricao='" + getDescricao() + "'" +
            ", horario='" + getHorario() + "'" +
            "}";
    }
}
