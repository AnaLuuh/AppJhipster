package testepacote.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A PeriodoLetivo.
 */
@Entity
@Table(name = "periodo_letivo")
public class PeriodoLetivo implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "duracao")
    private Double duracao;

    @ManyToOne
    private Aula aula;

    @OneToMany(mappedBy = "periodoLetivo")
    @JsonIgnore
    private Set<Aula> aulas = new HashSet<>();

    @OneToMany(mappedBy = "periodoLetivo")
    @JsonIgnore
    private Set<Falta> faltas = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getDuracao() {
        return duracao;
    }

    public PeriodoLetivo duracao(Double duracao) {
        this.duracao = duracao;
        return this;
    }

    public void setDuracao(Double duracao) {
        this.duracao = duracao;
    }

    public Aula getAula() {
        return aula;
    }

    public PeriodoLetivo aula(Aula aula) {
        this.aula = aula;
        return this;
    }

    public void setAula(Aula aula) {
        this.aula = aula;
    }

    public Set<Aula> getAulas() {
        return aulas;
    }

    public PeriodoLetivo aulas(Set<Aula> aulas) {
        this.aulas = aulas;
        return this;
    }

    public PeriodoLetivo addAula(Aula aula) {
        this.aulas.add(aula);
        aula.setPeriodoLetivo(this);
        return this;
    }

    public PeriodoLetivo removeAula(Aula aula) {
        this.aulas.remove(aula);
        aula.setPeriodoLetivo(null);
        return this;
    }

    public void setAulas(Set<Aula> aulas) {
        this.aulas = aulas;
    }

    public Set<Falta> getFaltas() {
        return faltas;
    }

    public PeriodoLetivo faltas(Set<Falta> faltas) {
        this.faltas = faltas;
        return this;
    }

    public PeriodoLetivo addFalta(Falta falta) {
        this.faltas.add(falta);
        falta.setPeriodoLetivo(this);
        return this;
    }

    public PeriodoLetivo removeFalta(Falta falta) {
        this.faltas.remove(falta);
        falta.setPeriodoLetivo(null);
        return this;
    }

    public void setFaltas(Set<Falta> faltas) {
        this.faltas = faltas;
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
        PeriodoLetivo periodoLetivo = (PeriodoLetivo) o;
        if (periodoLetivo.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), periodoLetivo.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "PeriodoLetivo{" +
            "id=" + getId() +
            ", duracao=" + getDuracao() +
            "}";
    }
}
